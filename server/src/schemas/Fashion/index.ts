
import zod from 'zod'

const productInfo = zod.object({
    material:zod.string().optional(),
    season:zod.string().optional(),
    ocasion:zod.string().optional(),
})
export const clothSchema =  zod.object({

    mainCategory:zod.string({required_error:"mainCategory not specified"}),
    subCategory:zod.string({required_error:"subCategory not specified"}),
    gender:zod.enum(["men", "woman","boy","girl"]),
    nameTag:zod.string({required_error:"nameTag not specified"}),
    price:zod.number({required_error:"price not specified"}),
    clothType:zod.string({required_error:"clothType not specified"}),
    color:zod.array(zod.string(),{required_error:"color not specified"}),
    size:zod.array(zod.string(),{required_error:"size not specified"}),
    brandTag:zod.string({required_error:"brandTag not specified"}),
    productInfo:productInfo

});

export type IclothSchema = zod.infer<typeof clothSchema>;