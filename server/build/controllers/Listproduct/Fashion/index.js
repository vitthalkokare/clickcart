"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMensClothesHandler = void 0;
const clothes_model_1 = require("../../../model/Category/Fashion/clothes-model");
async function listMensClothesHandler(req, res) {
    try {
        console.log(req.body);
        const data = await req.body;
        const { mainCategory, subCategory, gender, nameTag, price, clothType, color, size, brandTag, productInfo } = data;
        if (!mainCategory || !subCategory || !gender || !nameTag || !price || !clothType || !color || !size || !brandTag) {
            return res.status(400).json({ status: "failed", message: "All fields are required" });
        }
        const newCloth = await clothes_model_1.mensCloth.create({
            mainCategory,
            subCategory,
            gender,
            nameTag,
            price,
            clothingType: clothType,
            color,
            size,
            brandTag
        });
        console.log("newcloth", newCloth);
        if (newCloth) {
            return res.status(201).json({ status: "success", message: "Product listed successfully" });
        }
    }
    catch (error) {
        console.error("Error listing mensCloth:", error);
        if (error.errorResponse.code === 11000) {
            return res.status(500).json({ status: "error", message: "nameTag Product already Listed.." });
        }
        return res.status(500).json({ status: "error", message: "An error occurred while listing the product" });
    }
}
exports.listMensClothesHandler = listMensClothesHandler;
