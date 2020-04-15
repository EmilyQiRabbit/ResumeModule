import Router from "koa-router";
import * as Controller from "./controller";

const router = new Router();

router.get(/.js/, Controller.staticFile);
router.get("/resume/*", Controller.resumePage);
router.get("/print", Controller.print);
router.get("/ssr-resume/*", Controller.resumePageSSR);

export default router;
