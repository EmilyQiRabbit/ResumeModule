import Router from "koa-router";
import Controller from "./controller";

const router = new Router();

router.get(/.js/, Controller.staticFile);
router.get("/resume/*", Controller.resumePage);

export default router;
