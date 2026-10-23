import { Router } from "express";
import { invoiceSchema } from "../validators/invoiceValidator.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const router =Router();

router.post("/",validateRequest(invoiceSchema),(_req,res)=>{
    res.status(200).json({
        success:true,
        message:"Invoice data validated successfully"
    })
})

export default router;