import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryColumn()
    email: string

    @Column()
    first_name: string

    //@Column()
    //last_name: string

    @Column()
    pass: string

    //@Column()
    //birthday: Date
}

