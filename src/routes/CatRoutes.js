import express from "express";
const router = express.Router();
import {list,create,remove} from "../controllers/CatController";

router.get("/cats", list);
// router.get("/cats/:id", show);
router.post("/cats", create);
// router.put("/cats/:id", update);
router.delete("/cats/:id", remove);

export default router;