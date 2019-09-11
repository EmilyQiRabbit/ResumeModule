import Router from "koa-router";
import Controller from "./controller";

const router = new Router();
router.get("/homepage/*", Controller.homePage);

export default router;
