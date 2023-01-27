import "reflect-metadata"
import { DataSource } from "typeorm"
import { Metrics } from "./entity/tbdata"
import path from 'path'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "2525_ap",
    database: "metrics",
    entities: [Metrics],
    //entities: [
    //    path.join(__dirname, './entity/**/**.ts')],
    //__dirname, '../entity/**'],
    synchronize: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log("connected to database")
    })
    .catch((e) =>
        console.log(e)
    )
