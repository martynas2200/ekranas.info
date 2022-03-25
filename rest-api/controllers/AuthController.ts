
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import * as crypto from "crypto";
import { Mail } from "./Mail";
import { dataSource } from "../index";
class AuthController {


  static login = async (req: Request, res: Response) => {

    //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send({
        success: false,
        message: 'Nenurodyti prisijungimo duomenys'
      });
      return;
    }

    await new Promise(done => setTimeout(done, 1000));

    //Get user from database
    const userRepository = dataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOne({ 
        where: [
          { username },
          { email: username }
        ]
      });
    } catch (error) {
      res.status(401).send({
        success: false,
        error,
        message: 'Neteisingas vartotojo vardas'
      });
      return;
    }

    if (!user.password) {
      res.status(401).send({
        success: false,
        message: 'Registracija nebaigta! Prašome patikrinti pašto dėžutę ir užpildyti reikalingus duomenis!'
      });
      return;
    }

    //Check if encrypted password match
    let result = await user.checkIfUnencryptedPasswordIsValid(password);
    if (!result) {
      res.status(401).send({
        success: false,
        message: 'Neteisingas vartotojo slaptažodis'
      });
      return;
    }

    const cdate = new Date();
    user.lastLogin = cdate;

    let clueDestruction = false;
    if (user.clue != null) {
      user.clue = null;
      clueDestruction = true;
    }

    await userRepository.save(user);

    delete user.clue;
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    // delete user.lastLogin;
    delete user.school.ip;
    delete user.school.showTimetable;
    delete user.school.timetableRepeat;
    delete user.school.bellDuration;
    delete user.school.slideDuration;
    delete user.school.color1;
    delete user.school.color2;
    delete user.school.restart;
    delete user.school.firstSemester;
    delete user.school.secondSemester;
    delete user.school.endSemesters;
    delete user.school.turnOnTime;
    delete user.school.turnOffTime;
    delete user.school.version;
    delete user.school.lastChange;
    delete user.school.receiptTime;



    req.session.user = user;
    const hash = crypto.createHmac("SHA256", "dae4ff4167cf7d4e15dd62c22816fe23e8ce6ff5").update(user.email).digest("hex");
    res.send({
      success: true,
      message: 'Sėkmingai prisijungėte' + (clueDestruction ? ', slaptažodžio keitimo užklausa ištrinta!':''),
      user: user,
      hash
    });
  };


  static loggout = async (req: Request, res: Response) => {
    req.session.destroy((err) => {
      // -
      if (!err) res.status(200).send();
      else res.status(400).send();
    });
  };

  static UserData = async (req: Request, res: Response) => {
    if (req.session && req.session.user) {
      const hash = crypto.createHmac("SHA256", "dae4ff4167cf7d4e15dd62c22816fe23e8ce6ff5").update(req.session.user.email).digest("hex");
      res.status(200).send({
        success: true,
        user: req.session.user,
        hash
      });
    }
    else res.status(401).send({});
  };




  static changeUsername = async (req: Request, res: Response) => {

    // res.status(500).send();
    // return;

    // Get user ID 
    const id = req.session.user.id;

    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send('Nėra tinkamų duomenų');
      return;
    }

    // Get user from the database
    const userRepository = dataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send('Duomenų bazės klaida!');
      return;
    }


    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send('Neteisingas slaptažodis');
      return;
    }

    const usernameRegex = /^[a-zA-Z0-9]+$/;

    if (!usernameRegex.test(String(username))) {
      res.status(400).send('Vartotojo vardas neteisingas, prašome naudoti tik raides ir skaičius be tarpų');
      return;
    }
    else user.username = username;

    try {
      await userRepository.save(user);
    } catch (error) {
      res.status(400).send({
        success: true,
        message: 'Vartotojo vardo pakeisti nepavyko, nes ji užimtas',
        error
      });
      return;
    }

    req.session.user.username = username;
    res.status(200).send({
      success: true,
      message: 'Vartotojo vardas sėkmingai pakeistas'
    });

  }
  
  
  
  static changeEmail = async (req: Request, res: Response) => {

    // Get user ID 
    const id = req.session.user.id;
    
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send('Nėra tinkamų duomenų');
      return;
    }

    // Get user from the database
    const userRepository = dataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(500).send('Duomenų bazės klaida!');
      return;
    }

    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(400).send('Neteisingas slaptažodis');
      return;
    }
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!re.test(String(email).toLowerCase())) {
      res.status(400).send('Elektroninio pašto adresas netinkamas');
      return;
    }
    else user.email = email;

        
    try {
      await userRepository.save(user);
    } catch (error) {
      res.status(400).send({
        success: true,
        message: 'Elektroninio pašto pakeisti nepavyko',
        error
      });
      return;
    }

    req.session.user.email = email;
    res.status(200).send({
      success: true,
      message: 'Elektroninio pašto adresas pakeistas'
    });

  }



  static forgotPassword = async (req: Request, res: Response) => {
    
    await new Promise(done => setTimeout(done, 1000));
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!re.test(String(req.body.email).toLowerCase())) {
      res.status(400).send('Neteisingas elektroninio pašto adresas');
      return;
    }


    const userRepository = dataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { email: req.body.email } });
    } catch (error) {
      res.status(401).send('Nerastas vartotojas');
      return;
    }
    user.clue = crypto.randomBytes(45).toString('hex');
    try {
      await userRepository.save(user);
      let mailer = new Mail();
      let info = await mailer.send(user.email,'Ekranas.info paskyros slaptažožio atstatymas', 'reset.pug', {
          user,
          agent: req.headers['user-agent'],
          ip: req.ip || req.ips
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('Nepavyko, sukurti užklausos duomenų bazėje, parašyk pagalbai.');
      return;
    }

    res.status(200).send({
      success: true,
      message: 'Sėkmingai pavyko išsiųsti slaptažodio atstatymo laišką'
    });


  }
  static changePassword = async (req: Request, res: Response) => {
    // Get user ID 
    const id = req.session.user.id;

    // Get parameters from the body
    const { oldPassword, newPassword, repeatedPassword } = req.body;
    if (!(oldPassword && newPassword && repeatedPassword)) {
      res.status(400).send('Nėra tinkamų duomenų');
      return;
    }

    //Get user from the database
    const userRepository = dataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(500).send('Duomenų bazės klaida!');
    }

    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send('Neteisingas dabartinis slaptažodis');
      return;
    }

    //Check new password and repeated password matchs
    if (newPassword !== repeatedPassword) {
      res.status(400).send('Neteisingai pakartotas slaptažodis');
      return;
    }

    //Validate password lenght
    user.password = newPassword;
    if (newPassword.length < 5) {
      res.status(400).send('Per trumpas slaptažodis');
      return;
    }
    // user.password = newPassword;
    // const errors = await validate(user);
    // if (errors.length > 0) {
    //   res.status(400).send({
    //      essage: 'Per trumpas slaptažodis',
    //     errors
    //   });
    //   return;
    // }


    // Hash the new password and save
    user.hashPassword();
    userRepository.save(user);

    res.status(200).send({
      success: true,
      message: 'Slaptažodis sėkmingai pakeistas'
    });
  };
}
export default AuthController;