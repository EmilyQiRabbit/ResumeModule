import fs from "fs";
import path from "path";
import { Context } from "koa";

function homePage(ctx: Context, _next: Function) {
  const body = fs
    .readFileSync(path.resolve(__dirname, "../client/index.html"))
    .toString();
  ctx.response.type = "html";
  ctx.response.body = body;
}

export default {
  homePage
};
