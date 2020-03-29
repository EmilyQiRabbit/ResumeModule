import Koa from "koa";
import views from "koa-views";
import router from "./routes";

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
app.listen(3001, function() {
  console.log("Server listening on: ", 3001);
  console.log("请使用浏览器访问：http://localhost:3001/resume");
});

export default app;
