import Koa from "koa";
import views from "koa-views";
import router from "./routes";
import { ServerRouter } from "./ssr/server";
import url from "url";

import fs from "fs";
import https from "https";
import path from "path";

const app = new Koa();

const a = new url.URL("https://fack.host#hash");
a.searchParams.append("useragent", "miniprogram");

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

const certOptions = {
  key: fs.readFileSync(path.resolve("./.certification/server.key")),
  cert: fs.readFileSync(path.resolve("./.certification/server.crt"))
};

// preload all components on server side, 服务端没有动态加载各个组件，提前先加载好
ServerRouter.preloadAll().then(() => {
  https.createServer(certOptions, app.callback()).listen(443);
});
