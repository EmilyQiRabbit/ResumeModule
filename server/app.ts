import Koa from "koa";
import views from "koa-views";
import server from "koa-static";
// import fs from "fs";
import path from "path";
import router from "./routes";

const app = new Koa();

const __clientDir = __dirname.replace("dist", "client");
// 静态资源
app.use(server(path.join(__clientDir, "/client_dist")));
// 模版引擎
app.use(
  views(__clientDir, {
    extension: "hbs",
    map: { hbs: "handlebars" },
    options: {
      scriptSrc: "./test.js"
    }
  })
);
app.use(router.routes());
app.listen(3001, function() {
  console.log("Server listening on: ", 3001);
});

export default app;
