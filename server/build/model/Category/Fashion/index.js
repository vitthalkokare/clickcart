"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fashion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const fashionShema = new mongoose_1.default.Schema({
    gender: {
        type: 'String',
        required: true
    },
    category: {
        type: 'String',
        required: true
    },
    nameTag: {
        type: 'String',
        required: true
    },
    brandTag: {
        type: 'String',
        required: true
    },
    price: {
        type: 'number',
        required: true
    },
    color: {
        type: 'array',
    },
    sizes: { type: 'array' },
    productInfo: { type: 'object' },
}, { timestamps: true });
exports.Fashion = mongoose_1.default.model('fashion', fashionShema);
