import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
  } from "typeorm";
  import { School } from './School';
  import * as bcrypt from "bcryptjs";

  @Entity()
  export class Discipline {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: "varchar",
      length: 100
    })
    teacher: string;

    @Column({
      type: "varchar",
      length: 100
    })
    room: string;

    @Column({
      type: "varchar",
      length: 100
    })
    name: string;
    
    @ManyToOne(type => School)
    school: School;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

  }