"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetrics = exports.getMetricsA = void 0;
const tbdata_1 = require("../entity/tbdata");
const data_source_1 = require("../data-source");
const repoMetric = data_source_1.AppDataSource.getRepository(tbdata_1.Metrics);
const getMetricsA = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield repoMetric.find();
});
exports.getMetricsA = getMetricsA;
function getMetrics() {
    return __awaiter(this, void 0, void 0, function* () {
        const allMetrics = yield repoMetric.find();
        let data = JSON.parse(JSON.stringify(allMetrics));
        console.log("date: ", data[0].date);
        return data;
    });
}
exports.getMetrics = getMetrics;
