import express from "express";
import { welcome } from "../logger/logger.js";
import { name } from "../logger/logger.js";

const router = express.Router();


router.get("/welcome",(req, res)=>{
    res.status(200).json(welcome(name))
})

export default router;