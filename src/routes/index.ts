import { Router } from "express";
import exampleRoutes from "./example.routes";

const router = Router();

router.use("/example", exampleRoutes);

export default router;
