import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
  } from "typeorm";
  import { School } from './School';
  interface TimePoint {
    h: number;
    m: number;
    lesson: boolean;
    lessonN: number;
  }

  @Entity()
  export class Time {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-json")
    times: TimePoint[];

    @Column({
      type: "varchar",
      length: 100
    })
    name: string;

    @Column({
      default: false
    })
    active: boolean;
    
    @ManyToOne(type => School)
    school: School;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

  }