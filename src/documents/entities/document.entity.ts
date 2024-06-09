import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nameDocument:string

    @Column()
    typeDocument:string

    // @Column()
    // dateDocument:Date

    @DeleteDateColumn()
    deleteCat: Date;

    //Esto de aqui esta en pausa

    @ManyToOne(()=>User)
    @JoinColumn({name: "nameUser", referencedColumnName: 'nameUser'})
    user:User

    @Column()
    nameUser: string
}
