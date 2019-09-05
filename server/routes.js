const Router = require("koa-router");
const Controller = require("./controller");

const router = new Router();
router.get("/", Controller.homePage);

module.exports = router;
