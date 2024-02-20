import express from "express";
import { lowerCaseStr, str, trimStr, upperCaseStr } from "../validaters/formatter.js";

const router = express.Router();

router.get('/trim', (req, res)=> {
    res.status(202).send(trimStr(str))
});

router.get('/lowercase', (req, res)=> {
    res.status(202).send(lowerCaseStr(str))
})

router.get('/uppercase', (req, res)=> {
    res.status(202).send(upperCaseStr(str))
})

export default router;