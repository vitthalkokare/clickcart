"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleListElectronicProduct = exports.handleListFashionProduct = void 0;
const Fashion_1 = require("../../model/Category/Fashion");
async function handleListFashionProduct(data, req, res) {
    const { category, gender, nameTag, brandTag, price, color, sizes } = await data;
    try {
        if (data === undefined || data === null) {
            return res.status(401).json({ message: "all fields are required" });
        }
        const fashionProduct = await Fashion_1.Fashion.create({
            category: category,
            gender: gender,
            price: price,
            nameTag: nameTag,
            brandTag: brandTag,
            color: color,
            sizes: sizes
        });
        return res.status(200).json({ message: "success" });
    }
    catch (error) {
        console.log(error);
    }
}
exports.handleListFashionProduct = handleListFashionProduct;
async function handleListElectronicProduct() {
}
exports.handleListElectronicProduct = handleListElectronicProduct;
