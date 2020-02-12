import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { School } from './School';
import { Discipline } from "./Discipline";
import { type } from "os";
import { Length } from "class-validator";


@Entity()
export class Timetable {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Discipline)
    discipline: Discipline;

    @Column({
        type: 'varchar',
        length: 50
    })
    className: string;

    @Column()
    lessonNr: number;

    @Column()
    weekDay: 1 | 2 | 3 | 4 | 5;

    @Column()
    semester: 1 | 2;

    @ManyToOne(type => School)
    school: School;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}