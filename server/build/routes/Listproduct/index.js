"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Listproduct_1 = require("../../controllers/Listproduct");
const router = (0, express_1.Router)();
router.post('/fashion', Listproduct_1.handleListFashionProduct);
router.get('/fashion', (req, res) => {
    return res.json({ message: "getting list product" });
});
exports.default = router;
