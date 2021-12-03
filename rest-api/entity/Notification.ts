import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, JoinTable, ManyToOne} from "typeorm";
import { Image } from "./Image";
import { School } from "./School";
import { User } from "./User";

@Entity()
export class Notification {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'date',
        default: null
    })
    date1: Date;

    @Column({
        type: 'date',
        default: null
    })
    date2: Date;

    @Column({
        default: false
    })
    showBefore : boolean;
    
    @Column({
        default: true
    })
    visibility : boolean;
    
    @Column({
        default: false
    })
    repeatTimes : boolean;
    
    @Column({
        default: false
    })
    displayAuthor : boolean;
    
    @Column({
        default: false
    })
    important : boolean;
    
    @Column({
        type: 'varchar',
        default: 'note'
    })
    type: string;

    @Column({
        type: 'text',
        default: null
    })
    note: string;

    @Column({
        type: 'varchar',
        default: null
    })
    author: string;

    @ManyToOne(type => School)
    school: School;

    @ManyToOne(type => User)
    user: User;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
    
    @Column({
        type: 'date',
        default: null
    })
    deletedAt: Date;

    @ManyToMany(type => Image)
    @JoinTable()
    images: Image[];

}
