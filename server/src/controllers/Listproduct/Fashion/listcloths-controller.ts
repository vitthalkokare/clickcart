import { Request, Response } from "express";
import { kidsCloth, mensCloth,womansCloth } from "../../../model/Category/Fashion/clothes-model";
import { IclothSchema, clothSchema } from "../../../schemas/Fashion";


async function listClothesHandler(req: Request, res: Response, clothModel: any): Promise<any> {
    try {
        const data: IclothSchema = req.body;
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
    } catch (error: any) {
        console.error('Error listing clothes:', error);
        if (error.errorResponse?.code === 11000) {
            return res.status(500).json({ status: 'error', message: 'nameTag Product already listed' });
        }
        return res.status(500).json({ status: 'error', message: 'An error occurred while listing the product' });
    }
} 



async function listMensClothesHandler(req: Request, res: Response): Promise<any> {
    return listClothesHandler(req, res, mensCloth);
}

async function listWomanClothesHandler(req: Request, res: Response): Promise<any> {
    return listClothesHandler(req, res, womansCloth);
}

async function listKidsClothesHandler(req: Request, res: Response): Promise<any> {
    return listClothesHandler(req, res, kidsCloth);
}




// async function listMensClothesHandler(req: Request, res: Response): Promise<any> {
//     try {
//         console.log(req.body);
//         const data:IclothSchema = await req.body
//         const { mainCategory, subCategory, gender, nameTag, price, clothType, color, size, brandTag,productInfo} = data;

//         if (!mainCategory || !subCategory || !gender || !nameTag || !price || !clothType || !color || !size || !brandTag) {
//             return res.status(400).json({ status: "failed", message: "All fields are required" });
//         } 

//         const newCloth = await mensCloth.create({ 
//             mainCategory, 
//             subCategory,
//             gender,
//             nameTag,
//             price,
//             clothingType: clothType,
//             color,
//             size,
//             brandTag
//         });
//         console.log("newcloth",newCloth);

//         if (newCloth) {
            
//             return res.status(201).json({ status: "success", message: "Product listed successfully" });
//         }
//     } catch (error:any) {
//         console.error("Error listing mensCloth:", error);
//        if(error.errorResponse.code === 11000){

//         return res.status(500).json({ status: "error", message: "nameTag Product already Listed.." });

//        }
//        return res.status(500).json({ status: "error", message: "An error occurred while listing the product" });

//     }
// }

// async function listWomanClothesHandler(req: Request, res: Response): Promise<any> {
//     try {
//         console.log(req.body);
//         const data:IclothSchema = await req.body
//         const { mainCategory, subCategory, gender, nameTag, price, clothType, color, size, brandTag,productInfo} = data;

//         if (!mainCategory || !subCategory || !gender || !nameTag || !price || !clothType || !color || !size || !brandTag) {
//             return res.status(400).json({ status: "failed", message: "All fields are required" });
//         } 

//         const newCloth = await womansCloth.create({ 
//             mainCategory, 
//             subCategory,
//             gender,
//             nameTag,
//             price,
//             clothingType: clothType,
//             color,
//             size,
//             brandTag
//         });
//         console.log("newcloth",newCloth);

//         if (newCloth) {
            
//             return res.status(201).json({ status: "success", message: "Product listed successfully" });
//         }
//     } catch (error:any) {
//         console.error("Error listing mensCloth:", error);
//        if(error.errorResponse.code === 11000){

//         return res.status(500).json({ status: "error", message: "nameTag Product already Listed.." });

//        }
//        return res.status(500).json({ status: "error", message: "An error occurred while listing the product" });

//     }
// }

// async function listKidsClothesHandler(req: Request, res: Response): Promise<any> {
//     try {
//         console.log(req.body);
//         const data:IclothSchema = await req.body
//         const { mainCategory, subCategory, gender, nameTag, price, clothType, color, size, brandTag,productInfo} = data;

//         if (!mainCategory || !subCategory || !gender || !nameTag || !price || !clothType || !color || !size || !brandTag) {
//             return res.status(400).json({ status: "failed", message: "All fields are required" });
//         } 

//         const newCloth = await kidsCloth.create({ 
//             mainCategory, 
//             subCategory,
//             gender,
//             nameTag,
//             price,
//             clothingType: clothType,
//             color,
//             size,
//             brandTag
//         });
//         console.log("newcloth",newCloth);

//         if (newCloth) {
            
//             return res.status(201).json({ status: "success", message: "Product listed successfully" });
//         }
//     } catch (error:any) {
//         console.error("Error listing mensCloth:", error);
//        if(error.errorResponse.code === 11000){

//         return res.status(500).json({ status: "error", message: "nameTag Product already Listed.." });

//        }
//        return res.status(500).json({ status: "error", message: "An error occurred while listing the product" });

//     }
// }

export { listMensClothesHandler,listWomanClothesHandler,listKidsClothesHandler };
