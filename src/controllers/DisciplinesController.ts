
import { Request, Response } from "express";
import { getRepository, MoreThanOrEqual} from "typeorm";
import { validate } from "class-validator";
import { Discipline } from "../entity/Discipline";

class DisciplinesController {

    static getAll = async (req: Request, res:  Response) => {



        const disciplinesRepository = await getRepository(Discipline);
        let disciplines = await disciplinesRepository.find({
            where: {
                school: req.session.user.school
            }
        });
        
        //Send the disciplines object
        res.send({
            disciplines
        });
    }
    
    static create = async (req: Request, res:  Response) => {
        // interface Discipline {
        //     id: string;
        // teacher: string;
        // room: string;
        // name: string;
        //     createdAt: string;
        //     updatedAt: string;
        // }
            
        const { teacher, room, name } = req.body;
        if (!(teacher && room && name)) {
            res.status(400).send('Nėra tinkamų duomenų');
            return;
        }
        if (teacher.length < 5) {
            res.status(400).send('Per trumpas mokytojo(s) vardas, pavardė');
            return;
        }
        if (name.length < 4) {
            res.status(400).send('Per trumpas dalyko pavadinimas');
            return;
        }
            
        const disciplinesRepository = getRepository(Discipline);
        try {
            const discipline = await disciplinesRepository.save({
                school: req.session.user.school,
                teacher, 
                room, 
                name
            });
            delete discipline.school;
            res.status(200).send({
                success: true,
                message: 'Disciplina sėkmingai išsaugota',
                discipline
            });
            return;
        } catch (error) {
            res.status(500).send('Nepavyko išsaugoti naujos disciplinos!');
            return;
        }
    }
        
    static update = async (req: Request, res:  Response) => {
        if (!req.body.hasOwnProperty('discipline')) {
            res.status(400).send('Serveris negavo duomenų!');
            return;
        }
        if (!req.body.discipline.hasOwnProperty('id') ||
        !req.body.discipline.hasOwnProperty('teacher') ||
        !req.body.discipline.hasOwnProperty('name') ||
        !req.body.discipline.hasOwnProperty('room')) {
            res.status(400).send('Serveriui trūksta duomenų!');
            return;
        }
        
        const { teacher, room, name } = req.body.discipline;
        const id: number = parseInt(req.body.discipline.id);

        if (!(teacher && room && name && id)) {
            res.status(400).send('Nėra tinkamų duomenų');
            return;
        }
        const disciplinesRepository = getRepository(Discipline);

        try {
            const Checkdiscipline = await disciplinesRepository.findOneOrFail({
                where: {
                    school: req.session.user.school,
                    id  
                }
            });
        } catch (error) {
            res.status(404).send({
            success: false,
            message: 'Disciplina nerasta'
            });
            return;
        }

        try {
            const discipline = await disciplinesRepository.save({
                teacher, room, name, id
            });
            res.status(200).send({
                success: true,
                message: 'Disciplina sėkmingai atnaujinta',
                discipline
            });
            return;
        } catch (error) {
            res.status(500).send('Nepavyko atnaujinti disciplinos!');
            return;
        }

    }

    static delete = async (req: Request, res:  Response) => {
        const id: number = parseInt(req.params.id);
        if (!id) {
          res.status(400).send('Netinkamas id!');
          return;
        }
        
        const disciplinesRepository = getRepository(Discipline);
        try {
            const Checkdiscipline = await disciplinesRepository.findOneOrFail({
                where: {
                    school: req.session.user.school,
                    id  
                }
            });
        } catch (error) {
            res.status(404).send({
            success: false,
            message: 'Disciplina nerasta'
            });
            return;
        }

        try {
          await disciplinesRepository.delete(id);
        } catch (error) {
          res.status(400).send('Disciplinos nepavyko ištrinti!');
          return;
        }
        res.status(200).send({
            success: true,
            message: 'Disciplina sėkmingai ištrinta!'
        });
    }
};

export default DisciplinesController;