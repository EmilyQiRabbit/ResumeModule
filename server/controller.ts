// import fs from "fs";
// import path from "path";
import { Context } from "koa";

function homePage(ctx: Context, _next: Function) {
  return ctx.render("./layout");
}

export default {
  homePage
};
