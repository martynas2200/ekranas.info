
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { School } from "../entity/School";
import { Time } from "../entity/Time";
import { Screen } from "../entity/Screen";
import * as crypto from 'crypto';
import { Timetable } from "../entity/Timetable";
import { getCurrentSemester } from "./ScreenController";
// import { validate } from "class-validator";

class SettingsController {
  static getTimetableSettings = async (req: Request, res: Response) => {
    try {
      const school = await getRepository(School).findOneOrFail(req.session.user.school.id, {
        select: ["showTimetable", "firstSemester", "secondSemester", "endSemesters"]
      })
      let currentSemester = getCurrentSemester(school);
      let numberOfSavedRows = 0;
      if (currentSemester == 2 || currentSemester == 1) {
        numberOfSavedRows = await getRepository(Timetable).count({
          school: { id: req.session.user.school.id },
          semester: currentSemester
        })
      }
      
      res.status(200).send({
        success: true,
        currentSemester,
        numberOfSavedRows,
        settings: school
      });
      return;
    } catch (error) {
      res.status(400).send('Nepavyko gauti tvarkaraščio nustatymų');
      return;
    }
  }

  static updateTimetableSettings = async (req: Request, res: Response) => {
    const { showTimetable, firstSemester, secondSemester, endSemesters } = req.body.settings;
    // Tikrinti showtimetable
    if (!firstSemester || !secondSemester || !endSemesters) {
      res.status(400).send('Nėra tinkamų duomenų');
      return;
    }

    try {
      await getRepository(School).save({
        id: req.session.user.school.id,
        showTimetable: (showTimetable == "true"),
        firstSemester,
        secondSemester,
        endSemesters
      });
    } catch (error) {
      res.status(400).send({
        success: true,
        message: 'Tvarkaraščio nustatymų nepavyko išsaugoti',
        error
      });
      return;
    }
    
    res.status(200).send({
      success: true,
      message: 'Tvarkaraščio nustatymai sėkmingai išsaugoti'
    });
  }
  static getTimes = async (req: Request, res: Response) => {
    const times = await getRepository(Time).find({
      where: { school: { id: req.session.user.school.id } }
    });
    res.status(200).send({
      times
    })
  }
  static deleteTime = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    if (!id) {
      res.status(400).send('Netinkamas id!');
      return;
    }

    try {
      await getRepository(Time).delete(id);
    } catch (error) {
      res.status(400).send('Pamokų laiko nepavyko ištrinti!');
      return;
    }
    res.status(200).send({
      success: true,
      message: 'Pamokų laikas sėkmingai ištrintas!'
    });
  }

  static createTime = async (req: Request, res: Response) => {
    let { times, name } = req.body;
    if (!(times && name) || times.length < 2) {
      res.status(400).send('Trūksta duomenų');
      return;
    }

    times.forEach(time => {
      if (typeof time.h !== 'number' || typeof time.m !== 'number' || typeof time.lesson !== 'boolean' || typeof time.lessonN !== 'number') {
        res.status(400).send('Nėra tinkamų duomenų tipų');
        return;
      }
      if (Object.keys(time).length !== 4) {
        res.status(400).send('Nėra tinkamų duomenų');
        return;
      }
    });

    try {
      const newTime = await getRepository(Time).save({
        name,
        times,
        school: req.session.user.school
      });
      res.status(200).send({
        success: true,
        message: 'Naujas pamokų laikas sėkmingai išsaugotas',
        time: newTime
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('Pamokų laiko nepavyko išsaugoti, parašyk pagalbai');
      return;
    }
  }

  static activateTime = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    if (!id) {
      res.status(400).send('Netinkamas id!');
      return;
    }
    // "UPDATE `time` SET `active` = CASE WHEN id = $id THEN 1 ELSE 0 END WHERE schoolId = ?;"
    try {
      await getRepository(Time)
        .createQueryBuilder()
        .update(Time)
        .set({
          active: () => "CASE WHEN `id` = " + id + " THEN 1 ELSE 0 END"
        })
        .where("schoolId = :id", { id: req.session.user.school.id })
        .execute();
      res.status(200).send({
        success: true,
        message: 'Pamokų laikas sėkmingai nustatytas numatytu'
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('Pamokų laiko nepavyko nustatyti numatytu, parašyk pagalbai');
      return;
    }
  }


  static getSettings = async (req: Request, res: Response) => {
    const settings = await getRepository(School).findOne({
      where: { id: req.session.user.school.id },
      select: ['ip', 'turnOnTime', 'turnOffTime']
    });
    settings.turnOffTime = settings.turnOffTime.substr(0, 5);
    settings.turnOnTime = settings.turnOnTime.substr(0, 5);
    res.status(200).send({
      settings
    })
  }

  static updateSettings = async (req: Request, res: Response) => {
    const { ip, turnOnTime, turnOffTime } = req.body;
    if (!ip || !turnOnTime || !turnOffTime) {
      res.status(400).send('Nėra tinkamų duomenų');
      return;
    }
    if (!(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip))) {  
      res.status(400).send('Neteisingas IP adresas');
      return;
    }  
    if (!(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(turnOnTime))) {  
      res.status(400).send('Neteisingas Laikas');
      return;
    }  
    if (!(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(turnOffTime))) {  
      res.status(400).send('Neteisingas Laikas');
      return;
    }  
    if (
      parseInt(turnOffTime.split(':')[0], 10) * 60 +
      parseInt(turnOffTime.split(':')[1], 10) <
      parseInt(turnOnTime.split(':')[0], 10) * 60 +
      parseInt(turnOnTime.split(':')[1], 10)
      ) {
        res.status(400).send('Išjungimo laikas didesnis už įjungimo laikas');
        return;
      }
    try {
      await getRepository(School).save({
        id: req.session.user.school.id,
        ip, 
        turnOnTime, 
        turnOffTime
      });
      res.status(200).send({
        success: true,
        message: 'Nustatymai buvo sėkmingai atnaujinti'
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('Nustaymų nepavyko atnaujinti, parašyk pagalbai');
      return;
    }
  }

  static getScreens = async (req: Request, res: Response) => {
    const screens = await getRepository(Screen).find({
      where: { school: { id: req.session.user.school.id } }
    });
    res.status(200).send({
      screens
    })
  }

  static createScreen = async (req: Request, res: Response) => {
    const { name, settings } = req.body.screen;
    if (!(name && settings)) {
      res.status(400).send('Trūksta duomenų!');
      return;
    }
    await new Promise(done => setTimeout(done, 5000));
    const clue = crypto.randomBytes(90).toString('hex');
    try {
      const newScreen = await getRepository(Screen).save({
        name,
        settings,
        clue,
        school: req.session.user.school
      });
      res.status(200).send({
        success: true,
        message: 'Sėkmingai sukurtas ekranas',
        screen: newScreen
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('Nepavyko sukurti ekrano, parašyk pagalbai');
      return;
    }
  }

  static deleteScreen = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    if (!id) {
      res.status(400).send('Netinkamas id!');
      return;
    }
    const screenRepository = await getRepository(Screen);
    try {
      await screenRepository.findOneOrFail({
        where: {
          school: req.session.user.school,
          id
        }
      });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: 'Ekranas nerastas'
      });
      return;
    }

    try {
      await screenRepository.delete(id);
    } catch (error) {
      res.status(400).send('Pamokų laiko nepavyko ištrinti!');
      return;
    }
    res.status(200).send({
      success: true,
      message: 'Pamokų laikas sėkmingai ištrintas!'
    });
  }

  static updateScreenSettings = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    const screenRepository = await getRepository(Screen);
    try {
      await screenRepository.findOneOrFail({
        where: {
          school: req.session.user.school,
          id
        }
      });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: 'Ekranas nerastas'
      });
      return;
    }

    const { name, settings } = req.body.screen;
    if (!(name && settings)) {
      res.status(400).send('Trūksta duomenų!');
      return;
    }

    try {
      const newScreen = await getRepository(Screen).save({
        id,
        name,
        settings
      });
      res.status(200).send({
        success: true,
        message: 'Sėkmingai atnaujintos ekrano parinktys',
        screen: newScreen
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('Nepavyko atnaujinti ekrano pasirinkčių, parašyk pagalbai');
      return;
    }

  }
  static updateScreenKey = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const clue = crypto.randomBytes(90).toString('hex');
    try {
      await getRepository(Screen)
        .createQueryBuilder()
        .update(Screen)
        .set({
          clue
        })
        .where("schoolId = :school", { school: req.session.user.school.id })
        .andWhere("id = :id", { id })
        .execute();
      res.status(200).send({
        success: true,
        message: 'Sėkmingai sukurtas naujas raktas',
        clue
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('Nepavyko sukurti naujo rakto, parašyk pagalbai');
      return;
    }
  }

};

export default SettingsController;