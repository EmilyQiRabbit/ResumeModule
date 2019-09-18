import Router from "koa-router";
import Controller from "./controller";

const router = new Router();
router.get("/resume/*", Controller.ResumePage);

export default router;
