import { Context } from "koa";
import fs from "fs";

const resumePage = (ctx: Context, _next: Function) => {
  return ctx.render("./layout");
};
// 加载静态资源文件
const staticFile = async (ctx: Context, _next: Function) => {
  const content = await fs.readFileSync(
    `${process.cwd()}/dist/client/${
      ctx.path.match(/[a-z\d~]+\.bundle\.js[.map]*/)[0]
    }`,
    "binary"
  );
  ctx.res.writeHead(200);
  ctx.res.write(content, "binary");
  ctx.res.end();
};

export default {
  resumePage,
  staticFile
};
