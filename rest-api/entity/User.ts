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
  
    async hashPassword() {
      this.password = bcrypt.hashSync(this.password, 8);
    }
  
    async checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
      return bcrypt.compare(unencryptedPassword, this.password);
    }
  }