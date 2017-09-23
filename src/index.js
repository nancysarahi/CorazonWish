import express from "express";
import mongoose from "mongoose";
import CatRoutes from "./routes/CatRoutes";
import bodyParser from "body-parser";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nancysarahi:hotcakesmm@ds149763.mlab.com:49763/aca-practice");
app.use(bodyParser.json());
app.use(CatRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
