# ResumeModules

## 项目说明

- Node 服务基于 Koa，模版引擎为 hbs。

  - ts 代码需要编译为 js
  - koa-views 配置模版引擎
  - koa-static 配置静态资源
  - koa-router 配置路由

- 前端部分基于 React + ts，webpack 编译后作为静态资源被 Node 服务访问

## 开发说明

运行 `npm run start:dev`，修改代码可不必重新启动项目。

### 直接启动

在控制台运行 `npm run start`，访问地址 http://localhost:3001/resume/page0
