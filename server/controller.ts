import { Context } from "koa";

function ResumePage(ctx: Context, _next: Function) {
  return ctx.render("./layout");
}

export default {
  ResumePage
};
