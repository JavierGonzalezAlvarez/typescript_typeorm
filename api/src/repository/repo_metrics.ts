import { Metrics } from "../entity/tbdata";
import { AppDataSource } from "../data-source";
import { typeMetric } from "../types/types";

const repoMetric = AppDataSource.getRepository(Metrics)

export const getMetricsA = async () => {
    return await repoMetric.find();
};

export async function getMetrics() {
    const allMetrics = await repoMetric.find()
    let data: typeMetric = JSON.parse(JSON.stringify(allMetrics))
    console.log("date: ", data[0].date)
    return data
}
