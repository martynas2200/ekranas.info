import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm";
import { School } from "./School";
import { User } from "./User";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    size : number;
    
    @Column({
        type: 'varchar',
        default: ''
    })
    url: string;

    @ManyToOne(type => School)
    school: School;

    @ManyToOne(type => User)
    user: User;

    @Column()
    @CreateDateColumn()
    uploadedAt: Date;
    
}
