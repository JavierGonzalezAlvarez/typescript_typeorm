import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm"

@Entity({ name: "tbdata" })
export class Metrics {
    @PrimaryGeneratedColumn()
    oid: number;

    @Column()
    id: string;

    @Column()
    conteo: number;

    @Column()
    date: string;

    @Column({ length: 100 })
    metrics: string;

    @Column({ length: 100 })
    trx_date_older: string;

    @Column()
    date_from_ms: number;

    @Column()
    to_date_ms: number;
}