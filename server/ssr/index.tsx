import React from "react";
import { StaticRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { renderToString } from "react-dom/server";
//下面这个是需要让react-loadable在服务端可运行需要的，下面会讲到
import { getBundles } from "react-loadable/webpack";
import { ClientRouter } from "./client";
const stats = require("./build/react-loadable.json");

export class SSR {
  render(url, _data) {
    let modules = [];
    const jsx = (
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={url} basename="/ssr-resume">
          <ClientRouter />
        </StaticRouter>
      </Loadable.Capture>
    );
    // const context = {};
    const html = renderToString(jsx);
    //获取服务端已经渲染好的组件数组
    console.log(modules, stats);
    let bundles = getBundles(stats, [
      "./components/Page2",
      "./components/Page1"
    ]);
    return {
      html,
      scripts: this.generateBundleScripts(bundles)
    };
  }
  // 把 SSR 过的组件都转成 script 标签扔到 html 里
  generateBundleScripts(bundles: any[]) {
    console.log(bundles);
    return bundles
      .filter(bundle => bundle && bundle.file.endsWith(".js"))
      .map(bundle => {
        return `<script type="text/javascript" src="${bundle.file}"></script>`;
      });
  }

  static preloadAll() {
    return Loadable.preloadAll();
  }
}
