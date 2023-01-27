"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repo_metrics_1 = require("./repository/repo_metrics");
function createServer() {
    const app = (0, express_1.default)();
    app.get('/', (req, res) => {
        res.send({
            message: "api v.1.0"
        });
    });
    app.get('/getTrx', (req, res) => {
        try {
            //getting data with a promise
            let metrics = (0, repo_metrics_1.getMetrics)().then(data => {
                console.log(data);
                console.log("count: ", data[0].conteo);
                res.send({
                    data
                });
            }).catch(err => res.json(err));
            console.log("promise:", metrics);
        }
        catch (e) {
            res.status(400).json({
                error: e
            });
        }
    });
    app.get('/getTrxA', (req, res) => {
        try {
            //getting data with a promise
            let metrics = (0, repo_metrics_1.getMetricsA)().then(data => {
                console.log(data);
                console.log("count: ", data[0].conteo);
                res.send({
                    data
                });
            }).catch(err => res.json(err));
            console.log("promise:", metrics);
        }
        catch (e) {
            res.status(400).json({
                error: e
            });
        }
    });
    return app;
}
exports.default = createServer;
