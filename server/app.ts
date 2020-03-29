import Koa from "koa";
import views from "koa-views";
import router from "./routes";

import fs from "fs";
import https from "https";
import path from "path";

const app = new Koa();

// 配置模版引擎
app.use(
  views(__dirname, {
    extension: "hbs",
    map: { hbs: "handlebars" },
    options: {
      scriptSrc: "main.bundle.js"
    }
  })
);
// 路由
app.use(router.routes());
// 本地服务端口
// app.listen(3001, function() {
//   console.log("Server listening on: ", 3001);
//   console.log("请使用浏览器访问：http://localhost:3001/resume");
// });

const certOptions = {
  key: fs.readFileSync(path.resolve("./.certification/server.key")),
  cert: fs.readFileSync(path.resolve("./.certification/server.crt"))
};

const server = https.createServer(certOptions, app.callback()).listen(443);

export default server;
