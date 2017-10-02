import express from "express";
const router = express.Router();
import {list,create,remove} from "../controllers/KidController";

router.get("/kids", list);
// router.get("/kids/:id", show);
router.post("/kids", create);
// router.put("/kids/:id", update);
router.delete("/kids/:id", remove);

export default router;