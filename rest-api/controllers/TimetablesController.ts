
import { Request, Response } from "express";
import { getRepository, MoreThanOrEqual} from "typeorm";
import { Timetable } from "../entity/Timetable";
import { Discipline } from "../entity/Discipline";

class TimetablesController {
    
    
    static getClasses = async (req: Request, res: Response) => {
        try {
            const rawRows = await getRepository(Timetable).query('SELECT  `timetable`.`className` FROM `timetable` WHERE `timetable`.`schoolId` = ' + req.session.user.school.id + ' GROUP BY `className`;');
            let classes: Array<string> = [];
            rawRows.forEach(row => {
                classes.push(row.className);
            });
            // delete rows;

            res.status(200).send({
                success: true,
                // rows,
                classes
            });
            
        } catch (error) {
            res.status(400).send({
                success: false,
                error
            });
            
        }

    }

    static getByDayAndSemester = async (req: Request, res: Response) => {
        
        const day: number = parseInt(req.params.day);
        const semester: number = parseInt(req.params.semester);
        
        
        if (!day || !semester) {
            res.status(400).send('Netinkami parametrai!');
            return;
        }







        let classes: Array<string> = [];
        try {
            const rawRows = await getRepository(Timetable).query('SELECT  `timetable`.`className` FROM `timetable` WHERE `timetable`.`schoolId` = ' + req.session.user.school.id + ' GROUP BY `className`;');
            rawRows.forEach(row => {
                classes.push(row.className);
            });
        } catch (error) {
            console.log(error);
        }









        try {
            const rows = await getRepository(Timetable).query('SELECT `timetable`.`disciplineId`, GROUP_CONCAT(DISTINCT CONCAT(`lessonNr`, ":!*!:", `className`) ORDER BY `lessonNr` SEPARATOR "@^n^@") AS `variants`, `discipline`.`room`, `discipline`.`teacher`, `discipline`.`name` FROM `timetable` LEFT JOIN `discipline` ON `timetable`.`disciplineId` = `discipline`.`id` WHERE `timetable`.`weekDay` = ' + day + ' AND `timetable`.`semester` = ' + semester + ' AND `timetable`.`schoolId` = ' + req.session.user.school.id + ' GROUP BY `disciplineId`');
            
            
            rows.forEach(discipline => {
                discipline.variants = discipline.variants.split('@^n^@')
                discipline.lessons = {};
                discipline.variants.forEach(string => {
                    let pair = string.split(':!*!:');
                    discipline.lessons[pair[0]] = pair[1];
                });
                delete discipline.variants;
            });
            // .createQueryBuilder("timetable")
            // .leftJoinAndSelect("timetable.discipline", "discipline", "discipline.id = timetable.disciplineId")
            // .addSelect('GROUP_CONCAT(CONCAT(timetable.lessonNr, ":!*!:", timetable.className) ORDER BY timetable.lessonNr SEPARATOR "@^n^@") AS lessons')
            // .addSelect('discipline.room AS room')
            // .where("timetable.weekDay = :day", { day: day })
            // .groupBy("timetable.disciplineId")
            // .getMany();
            res.status(200).send({
                success: true,
                rows,
                classes
            });
            
        } catch (error) {
            res.status(400).send({
                success: false,
                error
            });
            
        }
        
        
    }
    
    static update = async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        if (!id) {
            res.status(400).send({
              success: false,
              message: 'Netinkamas id!'
            });
            return;
        }        
        if (!TimetablesController.deleteQuery(id, req.session.user.school.id, req.body.semester, req.body.weekDay)) {
            res.status(400).send('Nepavyko išvalyti senų duomenų!');
            return;
        }
        else {
            // Po patikrinimo
            TimetablesController.create(req, res);
        }
    }

    static create = async (req: Request, res: Response) => {
        const { disciplineId, lessons} = req.body.row;
        const { weekDay, semester } = req.body;
        if (!disciplineId || !lessons || !semester || !weekDay) {
            res.status(400).send('Trūksta duomenų, galbūt nepasirinkta disciplina!');
            return;
        }
        if (typeof disciplineId !== 'number' ||
            typeof semester !== 'number' ||
            typeof weekDay !== 'number' ||
            typeof lessons !== 'object' || weekDay > 7) {
            res.status(400).send('Netinkami duomenys!');
            return;
        }

        

        const disciplinesRepository = await getRepository(Discipline);
        try {
            const discipline = await disciplinesRepository.findOneOrFail({
                where: {
                    school: req.session.user.school,
                    id: disciplineId
                }
            });
        } catch (error) {
            // console.log(error);
            res.status(400).send('Nepavyko išsaugoti, kadangi disciplina nerasta');
            return;
        }

        let newRows: Array<any> = [];
        for (const lessonNr in lessons) {
            if (!parseInt(lessonNr)) continue;
            if (parseInt(lessonNr) > 8 || parseInt(lessonNr) < 1) continue;
            if (!lessons.hasOwnProperty(lessonNr)) continue;
            if (!lessons[lessonNr]) continue;
            newRows.push({
                discipline: { id: disciplineId },
                className: lessons[lessonNr],
                lessonNr: parseInt(lessonNr),
                weekDay,
                semester,
                school:{ id: req.session.user.school.id }
            });
        }
        if (newRows.length == 0) {
            res.status(400).send('Klaida! Nėra ką išsaugoti!');
            return;
        }
        try {
            const a = await getRepository(Timetable)
            .createQueryBuilder()
            .insert()
            .into(Timetable)
            .values(newRows)
            .execute();
            res.status(200).send({
                success: true,
                message: 'Sėkmingai išsaugota',
                a
            });
            return;
        } catch (error) {
            res.status(400).send('Nepavyko išsaugoti!');
        }

    }

    static delete = async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const weekDay: number = parseInt(req.params.weekDay);
        const semester: number = parseInt(req.params.semester);
        if (!id || !weekDay || !semester) {
            res.status(400).send('Netinkami parametrai!');
            return;
        }        
        if (TimetablesController.deleteQuery(id, req.session.user.school.id, semester, weekDay)) {
            res.status(200).send({
                success: true,
                message: 'Sėkmingai ištrinta'
            });
        }
        else {
            res.status(400).send('Nepavyko ištrinti!');
        }
    }
        
        // {"success":true,"rows":
        // {"disciplineId":13,"room":"30","teacher":"Rima Lukoševičienė","name":"Kūno kultūra","lessons":{"1":"7","2":"IIG","3":"5","5":"IVG","6":"IIG"}},
        //{"disciplineId":16,"room":"7","teacher":"Laimutė Žakienė","name":"Chemija","lessons":{"1":"8","2":"IIIG","3":"9","4":"6","5":"9"}},{"disciplineId":20,"room":"24 | 25 | 28","teacher":"Eglė Pangonienė","name":"Matematika","lessons":{"2":"IVG","3":"8","5":"5","6":"6","7":"IIG"}},{"disciplineId":25,"room":"11","teacher":"Kristina Palubinskienė","name":"Technologijos","lessons":{"1":"IIIG"}},{"disciplineId":26,"room":"12","teacher":"Algimantas Avulis","name":"Technologijos","lessons":{"4":"7"}}]}
        
        static deleteQuery = async (id, school, semester, weekDay) => {
            try {
                await getRepository(Timetable)
                .createQueryBuilder()
                .delete()
                .where("disciplineId = :id", { id })
                .andWhere("schoolId = :school", { school })
                .andWhere("weekDay = :weekDay", { weekDay })
                .andWhere("semester = :semester", { semester })
                .execute();
                return true;  
            } catch (error) {
                return false;                    
            }
        }
    };
    
    export default TimetablesController;