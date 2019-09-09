import Koa from "koa";
import views from "koa-views";
import router from "./routes";

const app = new Koa();

app.use(views(`${__dirname.replace("dist", "client")}`, { extension: "ejs" }));
app.use(router.routes());
app.listen(3001, function() {
  console.log("Server listening on: ", 3001);
});

export default app;
