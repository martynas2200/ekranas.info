import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
  } from "typeorm";
  import { Length, IsNotEmpty } from "class-validator";
  import { School } from './School';
  import * as bcrypt from "bcryptjs";
  // `clue` varchar(105) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `deleted` tinyint(1) NOT NULL DEFAULT '0'

  @Entity()
  @Unique(["username"])
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
      type: "varchar",
      length: 100
    })
    name: string;

    @Column({
      type: "varchar",
      length: 100
    })
    email: string;

    @Column({
      type: 'varchar',
      default: null
    })
    @Length(4, 20)
    username: string;
    
    @ManyToOne(type => School, school => school.users, {
      eager: true
  })
    school: School;

    @Column({
      type: 'varchar',
      length: 250,
      default: null
    })
    password: string;
    
    @Column({
      type: 'varchar',
      length: 120,
      default: null
    })
    clue: string;

    @Column({
      type: 'int'
    })
    @IsNotEmpty()
    role: number;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
      default: null
    })
    lastLogin: Date;
  
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 8);
    }
  
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
      if (!bcrypt.compareSync(unencryptedPassword, this.password)) {
        const hash = this.password.replace(/^\$2y(.+)$/i, '$2a$1');
        return bcrypt.compareSync(unencryptedPassword, hash);
      }
      else return bcrypt.compareSync(unencryptedPassword, this.password);
    }
  }