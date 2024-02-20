import express from "express";
import welcomeRouter from "./src/routes/welcome.route.js";
import introRouter from './src/routes/test_me.route.js';
import strRouter from './src/routes/test_meStr.route.js';
import lodashChunk from './src/routes/lodash.route.js';

const app = express();
const port = 5000;

app.use(express.json())

app.use('/api',welcomeRouter);
app.use('/api',introRouter);
app.use('/api',strRouter);
app.use('/api',lodashChunk);

app.listen(port,()=>{
    console.log(`app listening on ${port}`)
})