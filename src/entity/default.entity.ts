import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('test')
export class DefaultEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}