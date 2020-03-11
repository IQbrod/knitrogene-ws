import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Material')
export class MaterialEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}