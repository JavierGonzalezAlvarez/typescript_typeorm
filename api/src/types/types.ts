export interface typeMetric {
    [index: number]:
    {
        oid: number,
        id: string,
        conteo: number,
        date: string,
        metric: string,
        trx_date_older: string,
        date_from_ms: number,
        to_date_ms: number
    }
}

