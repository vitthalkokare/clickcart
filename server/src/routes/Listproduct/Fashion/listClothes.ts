import { Router } from "express";
import { listKidsClothesHandler, listMensClothesHandler, listWomanClothesHandler } from "../../../controllers/Listproduct/Fashion/listcloths-controller";


const router = Router();

const MEN_CLOTH_ROUTE = '/api/listcloth/men';
const WOMAN_CLOTH_ROUTE = '/api/listcloth/woman';
const KIDS_CLOTH_ROUTE = '/api/listcloth/kids';

router.post(MEN_CLOTH_ROUTE,listMensClothesHandler);
router.post(WOMAN_CLOTH_ROUTE,listWomanClothesHandler);
router.post(KIDS_CLOTH_ROUTE,listKidsClothesHandler);


export default router; 