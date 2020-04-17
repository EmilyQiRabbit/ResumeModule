import React from "react";
import { StaticRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { renderToString } from "react-dom/server";
import { getBundles } from "react-loadable/webpack";
import { Router } from "./components/Router";
const stats = require("./build/react-loadable.json");

export class ServerRouter {
  render(url, _data) {
    let modules = [];
    const jsx = (
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={url} basename="/ssr-resume">
          <Router />
        </StaticRouter>
      </Loadable.Capture>
    );
    // const context = {};
    const html = renderToString(jsx);
    //获取服务端已经渲染好的组件数组
    let bundles = getBundles(stats, modules);
    return {
      html,
      scripts: this.generateBundleScripts(bundles)
    };
  }
  // 把 SSR 过的组件都转成 script 标签扔到 html 里
  generateBundleScripts(bundles: any[]) {
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
