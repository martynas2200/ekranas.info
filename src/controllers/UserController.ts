
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";
import * as crypto from 'crypto';
import { User } from "../entity/User";
import { Mail } from './Mail';
class UserController {

  static listAll = async (req: Request, res: Response) => {
    // Get users from database
    const userRepository = getRepository(User);
    const users = await userRepository.find({
      select: ["id", "username", "role", "name", "email", "lastLogin"],
      where: { school: { id: req.session.user.school.id } } // We dont want to send the passwords on response
    });

    // Send the users object
    res.send({ users });
  };

  static saveOneByClue = async (req: Request, res: Response) => {
    // Get the clue from the url
    if (!req.params.clue || req.params.clue == '') {
      res.status(400).send('Netinkami duomenys');
      return;
    }
    // Get the user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({
        where: { clue: req.params.clue }
      });
    } catch (error) {
      res.status(404).send("Atsiprašome, bet nuoroda neteisinga, parašyk dešinėje žinutę pagalbai!");
    }


    // Get parameters from the body
    const { password, repeatedPassword } = req.body;
    if (!(password && repeatedPassword)) {
      res.status(400).send('Nėra tinkamų duomenų!');
      return;
    }
    //Check new password and repeated password matchs
    if (password !== repeatedPassword) {
      res.status(400).send('Neteisingai pakartotas slaptažodis');
      return;
    }
    //Validate password lenght
    if (password.length < 5) {
      res.status(400).send('Per trumpas slaptažodis');
      return;
    }

    
    if (user.password) {
      // Password reset
      user.password = password;
      user.clue = null;
      user.hashPassword();
      try {
        await userRepository.save(user);
        // Remove details from response
        delete user.password;
        delete user.school;
        res.status(200).send({
          user,
          success: true,
          message: 'Sėkmingai slaptažodis buvo pakeistas!'
        });
        return;
      } catch (error) {
        res.status(400).send('Nepavyko atnaujinti slaptažodžio! Parašyk pagalbai!');
        return;
      }
    }
    else {
      // Account activation
      user.password = password;
      user.clue = null;
      user.hashPassword();
      if (req.body.username) {
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if (!usernameRegex.test(String(req.body.username))) {
          res.status(400).send('Vartotojo vardas neteisingas, prašome naudoti tik raides ir skaičius be tarpų');
          return;
        }
        user.username = req.body.username;
      }
      try {
        await userRepository.save(user);
        // Remove details from response
        delete user.password;
        delete user.school;
        res.status(200).send({
          user: user,
          success: true,
          message: 'Sėkmingai paskyra buvo aktyvuota!'
        });
        return;
      } catch (error) {
        res.status(400).send('Atsiprašome, bet vartotojo vardas užimtas!');
        return;
      }
    }
  }
  static getOneByClue = async (req: Request, res: Response) => {
    // Get the clue from the url
    if (!req.params.clue) {
      res.status(400).send('Netinkami duomenys');
      return;
    }

    // Get the user from database
    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOneOrFail({
        where: { clue: req.params.clue }
      });
      // Remove school settings from response
      const school = {
        name: user.school.name,
        logo: user.school.logo
      };
      delete user.school;
      (user.school as any) = school;

      // Activation of account
      if (!user.password) {
        delete user.password;
        res.status(200).send({
          user: user,
          passwordReset: false
        });
      }
      else {
        // Password reset
        // Remove password hash from response
        delete user.password;
        res.status(200).send({
          user: user,
          passwordReset: true
        });
      }
    } catch (error) {
      res.status(404).send("Atsiprašome, bet nuoroda neteisinga!");
    }
  };

  static newUser = async (req: Request, res: Response) => {
    //Get parameters from the body
    let { name, email, role } = req.body;

    if (!name || !email || role === null || role === undefined) {
      res.status(400).send('Netinkami duomenys');
      return;
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
      res.status(400).send('Elektroninio pašto adresas netinkamas');
      return;
    }

    //Try to save. If fails, the username is already in use
    const clue = crypto.randomBytes(45).toString('hex');
    const userRepository = getRepository(User);
    try {
      let mailer =  new Mail();
      let info = await mailer.send(email, 'Ekranas.info paskyros kūrimas', 'activation.pug', {
        clue,
        user: {
          name,
          email
        },
        sender: req.session.user,
        school: req.session.user.school
      });
      const user = await userRepository.save({
        name,
        email,
        role: parseInt(role),
        clue,
        school: { id: req.session.user.school.id }
      });
      //If all ok, send 201 response
      res.status(201).send({
        success: true,
        message: 'Sėkmingai sukurtas naujas vartotojas',
        user,
        info
      });

    } catch (e) {
      console.log(e);

      res.status(409).send('Nepavyko išsaugoti naujo vartotojo');
      return;
    }

  };

  static editUser = async (req: Request, res: Response) => {

    //Get values from the body
    let { name, role } = req.body.user;

    if (!name || !parseInt(req.params.id) || role === null || role === undefined) {
      res.status(400).send('Netinkami duomenys');
      return;
    }
    //Get the ID from the url
    const id = parseInt(req.params.id);
    //Try to find user on database
    const userRepository = getRepository(User);
    let user;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      //If not found, send a 404 response
      res.status(404).send("Vartotojas nerastas");
      return;
    }

    //Try to safe, if fails, that means username already in use
    try {
      await userRepository.save({
        id,
        name,
        role: parseInt(role)
      });
    } catch (e) {
      res.status(409).send("Nepavyko išsaugoti.");
      return;
    }
    //After all send a 204 (no content, but accepted) response
    res.status(200).send({
      message: 'Vartotojo duomenys sėkmingai atnaujinti'
    });
  };

  static deleteUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("Vartotojas nerastas");
      return;
    }
    userRepository.delete(id);
    try {
      let mailer =  new Mail();
      let info = await mailer.send(user.email, 'Ekranas.info paskyros kūrimas', 'deleted-account.pug', {
        user: {
          name: user.name,
          email: user.email
        },
        sender: req.session.user,
        school: req.session.user.school
      });
    } catch (e) {

    }
    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };
};

export default UserController;