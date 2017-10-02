import express from "express";
import mongoose from "mongoose";
import KidRoutes from "./routes/KidRoutes";
import bodyParser from "body-parser";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nancysarahi:nancysarahi@ds153494.mlab.com:53494/wish-kid-corazon");
app.use(bodyParser.json());
app.use(KidRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
