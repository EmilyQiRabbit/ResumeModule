import Koa from "koa";
import router from "./routes";

const app = new Koa();
app.use(router.routes());

app.listen(3001, function() {
  console.log("Server listening on: ", 3001);
});

export default app;
