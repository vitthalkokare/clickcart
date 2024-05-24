"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listKidsClothesHandler = exports.listWomanClothesHandler = exports.listMensClothesHandler = void 0;
const clothes_model_1 = require("../../../model/Category/Fashion/clothes-model");
async function listClothesHandler(req, res, clothModel) {
    try {
        const data = req.body;
        const { mainCategory, subCategory, gender, nameTag, price, clothType, color, size, brandTag, productInfo } = data;
        if (!mainCategory || !subCategory || !gender || !nameTag || !price || !clothType || !color || !size || !brandTag) {
            return res.status(400).json({ status: 'failed', message: 'All fields are required' });
        }
        const newCloth = await clothModel.create({
            mainCategory,
            subCategory,
            gender,
            nameTag,
            price,
            clothType,
            color,
            size,
            brandTag
        });
        if (newCloth) {
            return res.status(201).json({ status: 'success', message: 'Product listed successfully' });
        }
    }
    catch (error) {
        console.error('Error listing clothes:', error);
        if (error.errorResponse?.code === 11000) {
            return res.status(500).json({ status: 'error', message: 'nameTag Product already listed' });
        }
        return res.status(500).json({ status: 'error', message: 'An error occurred while listing the product' });
    }
}
async function listMensClothesHandler(req, res) {
    return listClothesHandler(req, res, clothes_model_1.mensCloth);
}
exports.listMensClothesHandler = listMensClothesHandler;
async function listWomanClothesHandler(req, res) {
    return listClothesHandler(req, res, clothes_model_1.womansCloth);
}
exports.listWomanClothesHandler = listWomanClothesHandler;
async function listKidsClothesHandler(req, res) {
    return listClothesHandler(req, res, clothes_model_1.kidsCloth);
}
exports.listKidsClothesHandler = listKidsClothesHandler;
