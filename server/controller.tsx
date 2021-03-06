import { Context } from "koa";
import fs from "fs";
import puppeteer from "puppeteer";
import { htmlTemplate } from "./utils";
import { ServerRouter } from "./ssr/server";

export const resumePage = (ctx: Context, _next: Function) => {
  return ctx.render(`../dist/client/index`);
};
// 加载静态资源文件
export const staticFile = async (ctx: Context, _next: Function) => {
  let content;
  if (/ssr/.test(ctx.path)) {
    content = await fs.readFileSync(
      `${process.cwd()}/server/ssr/build/node/${ctx.path.replace(
        "/ssr-resume/",
        ""
      )}`,
      "binary"
    );
  } else {
    content = await fs.readFileSync(
      `${process.cwd()}/dist/client/${
        ctx.path.match(/[a-zA-Z\d~]+\.bundle\.js[.map]*/)[0]
      }`,
      "binary"
    );
  }
  ctx.res.writeHead(200);
  ctx.res.write(content, "binary");
  ctx.res.end();
};

// 此种 print 方式需要将本地服务改造为 https 链接。
// 目前可用的链接为：/print?page=latex or /print?page=0
export const print = async (ctx: Context) => {
  const { search } = ctx.request;
  if (/page/.test(search) && search.substr(1).split("=")[1]) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(
      `https://localhost/resume/${search.substr(1).split("=")[1]}`,
      {
        waitUntil: "networkidle2"
      }
    );
    const pdf = await page.pdf({ format: "A4", printBackground: true });
    await browser.close();
    ctx.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length
    });
    ctx.body = pdf;
  } else {
    ctx.response.status = 404;
    ctx.response.body = "Page Not Found";
  }
};

/**
 * SSR 参考教程：
 * 1. https://juejin.im/post/5af443856fb9a07abc29f1eb 以及
 * 2. https://www.freecodecamp.org/news/demystifying-reacts-server-side-render-de335d408fe4/
 * 3. https://juejin.im/post/5b0269c2518825428b3916f9
 * 4. https://juejin.im/post/5c627d9b6fb9a049f23d3e38#heading-13
 */

const s = new ServerRouter();
export const resumePageSSR = (ctx: Context, _next: Function) => {
  console.log("resumePageSSR");
  const rendered = s.render(ctx.req.url, {});

  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  ctx.res.end(htmlTemplate(rendered));
};
