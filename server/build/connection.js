"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function handleDB(url) {
    const db = mongoose_1.default.connect(url).
        then(() => { console.log("DB connection established"); }).catch((err) => { console.log("DB Eroor", err); });
}
exports.default = handleDB;
