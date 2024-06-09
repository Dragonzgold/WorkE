import { Role } from "../../common/enum/role.enum";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 15})
    name: string;

    @Column({unique: true, nullable: false})
    nameUser: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({type: 'enum', enum: Role, default: Role.USER})
    rol:Role;

    @DeleteDateColumn()
    deleteAt: Date;
}