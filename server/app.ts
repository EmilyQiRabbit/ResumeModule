import Koa from "koa";
import views from "koa-views";
// import server from "koa-static";
// import fs from "fs";
// import path from "path";
import router from "./routes";

const app = new Koa();

// 静态资源使用路由加载，这里不用了
// 客户端静态资源地址
// const __clientStaticDir = path.join(__dirname, "client");
// 配置静态资源
// app.use(server(__clientStaticDir, { extensions: ["js"] }));

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
app.listen(3001, function() {
  console.log("Server listening on: ", 3001);
  console.log("请使用浏览器访问：http://localhost:3001/resume");
});

export default app;
