import { Context } from "koa";
import fs from "fs";
import puppeteer from "puppeteer";

export const resumePage = (ctx: Context, _next: Function) => {
  return ctx.render("./layout");
};
// 加载静态资源文件
export const staticFile = async (ctx: Context, _next: Function) => {
  const content = await fs.readFileSync(
    `${process.cwd()}/dist/client/${
      ctx.path.match(/[a-zA-Z\d~]+\.bundle\.js[.map]*/)[0]
    }`,
    "binary"
  );
  ctx.res.writeHead(200);
  ctx.res.write(content, "binary");
  ctx.res.end();
};

// 此种 print 方式需要将本地服务改造为 https 链接。
export const print = async (ctx: Context) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://localhost/resume", {
    waitUntil: "networkidle0"
  });
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  ctx.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  ctx.body = pdf;
};
