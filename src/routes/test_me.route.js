import express from "express";
import { batchDate, batchMonth, batchName, printBatchInfo, printDate, printMonth } from "../utils/helper.js";

const router = express.Router();


router.get('/getmonth',(req, res)=>{
    res.status(200).send(printMonth())
});

router.get('/getdate',(req, res)=>{
    res.status(200).send( printDate())
})
router.get('/getbatchinfo',(req, res)=>{
    res.status(200).send(printBatchInfo(batchName, batchDate, batchMonth))
})

export default router