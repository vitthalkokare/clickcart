"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clothSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const productInfo = zod_1.default.object({
    material: zod_1.default.string().optional(),
    season: zod_1.default.string().optional(),
    ocasion: zod_1.default.string().optional(),
});
exports.clothSchema = zod_1.default.object({
    mainCategory: zod_1.default.string({ required_error: "mainCategory not specified" }),
    subCategory: zod_1.default.string({ required_error: "subCategory not specified" }),
    gender: zod_1.default.enum(["men", "woman", "boy", "girl"]),
    nameTag: zod_1.default.string({ required_error: "nameTag not specified" }),
    price: zod_1.default.number({ required_error: "price not specified" }),
    clothType: zod_1.default.string({ required_error: "clothType not specified" }),
    color: zod_1.default.array(zod_1.default.string(), { required_error: "color not specified" }),
    size: zod_1.default.array(zod_1.default.string(), { required_error: "size not specified" }),
    brandTag: zod_1.default.string({ required_error: "brandTag not specified" }),
    productInfo: productInfo
});
