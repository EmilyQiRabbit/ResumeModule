# ResumeModules

## 项目说明

- 后端服务基于 Koa，模版引擎为 hbs。

  - 使用 ts 代码，需要编译为 js
  - koa-views 提供模版引擎配置
  - koa-static 提供静态资源配置

- 前端部分基于 React + ts，由 webpack 负责编译，然后作为静态资源被后端服务访问

## 开发说明

运行 `npm run start:server`

在新的控制台运行 `npm run build:client:dev`

这样可以修改页面并直接看到效果，不必重新启动项目。

### 直接启动

在控制台运行 `npm run start`，访问地址 http://localhost:3001/resume/page0
