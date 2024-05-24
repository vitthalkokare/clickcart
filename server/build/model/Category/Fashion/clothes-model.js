"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kidsCloth = exports.womansCloth = exports.mensCloth = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const clothSchema = new mongoose_1.default.Schema({
    mainCategory: {
        type: 'String',
        required: true,
    },
    subCategory: {
        type: 'String',
        required: true,
    },
    gender: {
        type: 'String',
        enum: ['men', 'woman', 'boy', 'girl'],
        required: true
    },
    clothType: {
        type: 'String',
        required: true,
    },
    nameTag: {
        type: 'String',
        required: true,
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
        type: [String],
    },
    size: {
        type: [String]
    },
    productInfo: { type: {
            material: String,
            seasons: String,
            occasion: String,
        } },
    createdAt: { type: Date, default: Date.now() },
}, { timestamps: true });
clothSchema.index({ clothType: 1, nameTag: 1 }, { unique: true });
exports.mensCloth = mongoose_1.default.model('mencloths', clothSchema);
exports.womansCloth = mongoose_1.default.model('womancloths', clothSchema);
exports.kidsCloth = mongoose_1.default.model('kidsloths', clothSchema);
