import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
  } from "typeorm";
  import { User } from './User';
//   import { Length, IsNotEmpty } from "class-validator";

  @Entity()
  export class School {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
      type: "varchar",
      length: 250
    })
    name: string;

    @Column({
      type: "varchar",
      length: 200
    })
    logo: string;

    @Column({
      type: "varchar",
      default: '000.000.000.000',
      length: 20
    })
    ip: string;

    @Column({
        type: "varchar",
        length: 20
      })
    weatherID: string;
    
    @Column({
        default: true
    })
    showTimetable: boolean;

    @Column({
        default: 1200
    })
    timetableRepeat: number;

    @Column({
        default: 30000
    })
    bellDuration: number;

    @Column({
        default: 6000
    })
    slideDuration: number;

    @Column({
        type: 'varchar',
        length: 40,
        default: 'yellow'
    })
    color1: string;

    @Column({
        type: 'varchar',
        length: 40,
        default: '#002bff33'
    })
    color2: string;


    @Column({
        default: false
    })
    restart: boolean;

    @Column({
        type: 'date',
        default: null
    })
    firstSemester: Date;

    @Column({
        type: 'date',
        default: null
    })
    secondSemester: Date;

    @Column({
        type: 'date',
        default: null
    })
    endSemesters: Date;

    @Column({
        type: 'time'
    })
    turnOnTime: string;
    
    @Column({
        type: 'time'
    })
    turnOffTime: string;

    @Column({
        type: 'int'
    })
    version: number;

    @Column({
        type: 'datetime'
    })
    lastChange: Date;

    @Column({
        type: 'datetime'
    })
    receiptTime: Date;

    @OneToMany(type => User, user => user.school)
    users: User[];


//   `fb` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `fbPage` varchar(255) COLLATE utf8_unicode_ci NOT NULL
  }
