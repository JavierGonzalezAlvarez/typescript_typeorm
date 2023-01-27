"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const tbdata_1 = require("./entity/tbdata");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "2525_ap",
    database: "metrics",
    entities: [tbdata_1.Metrics],
    //entities: [
    //    path.join(__dirname, './entity/**/**.ts')],
    //__dirname, '../entity/**'],
    synchronize: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("connected to database");
})
    .catch((e) => console.log(e));
