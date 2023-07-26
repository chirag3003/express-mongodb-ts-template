import ExampleController from "controllers/example.controller";
import { Router } from "express";

const router = Router();

const { getExample } = new ExampleController();

router.get("/", getExample);

export default router;
