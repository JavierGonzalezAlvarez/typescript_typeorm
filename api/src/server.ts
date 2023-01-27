import express from 'express';
import { getMetrics, getMetricsA } from './repository/repo_metrics';

export default function createServer() {
    const app = express()

    app.get('/', (req, res) => {
        res.send({
            message: "api v.1.0"
        });
    })

    app.get('/getTrx', (req, res) => {
        try {
            //getting data with a promise
            let metrics = getMetrics().then(
                data => {
                    console.log(data)
                    console.log("count: ", data[0].conteo)
                    res.send({
                        data
                    });
                }
            ).catch(err => res.json(err));
            console.log("promise:", metrics)

        } catch (e) {
            res.status(400).json({
                error: e
            })
        }
    })

    app.get('/getTrxA', (req, res) => {
        try {
            //getting data with a promise
            let metrics = getMetricsA().then(
                data => {
                    console.log(data)
                    console.log("count: ", data[0].conteo)
                    res.send({
                        data
                    });
                }
            ).catch(err => res.json(err));
            console.log("promise:", metrics)

        } catch (e) {
            res.status(400).json({
                error: e
            })
        }
    })

    return app
}