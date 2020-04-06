import { Context } from "koa";
import fs from "fs";
import puppeteer from "puppeteer";
import React from "react";
import { renderToString } from "react-dom/server";
import { Layout, htmlTemplate } from "./ssrLayout";

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

// 参考教程：https://juejin.im/post/5af443856fb9a07abc29f1eb 以及
// https://www.freecodecamp.org/news/demystifying-reacts-server-side-render-de335d408fe4/
export const resumePageSSR = (ctx: Context, _next: Function) => {
  const jsx = <Layout />;
  const reactDom = renderToString(jsx);

  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  ctx.res.end(htmlTemplate(reactDom));
};
