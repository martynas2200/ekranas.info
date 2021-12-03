import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
  } from "typeorm";
  import { School } from './School';

  @Entity()
  @Unique(["clue"])
  export class Screen {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: 'varchar',
      default: 'Pagrindinis'
    })
    name: string;

    @Column("simple-json")
    settings: any;
    
    @ManyToOne(type => School, {
        eager: true
    })
    school: School;
    
    @Column({
      type: 'varchar',
      length: 200,
      default: null
    })
    clue: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

  }