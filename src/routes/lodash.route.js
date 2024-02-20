import express from 'express';
import { OddNoTail, lodashChunk, duplicateArr, Pairs} from '../lodash/lodash.js';

const router = express.Router();

router.get('/chunk',(req, res)=> {
    res.status(204).send(lodashChunk())
})
router.get('/tail',(req, res)=> {
    res.status(205).send(OddNoTail())
})
router.get('/union',(req, res)=> {
    res.status(205).send(duplicateArr())
})
router.get('/pair',(req, res)=> {
    res.status(205).send(Pairs())
})

export default router;