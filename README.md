# ResumeModules

## 项目说明

- Node 服务基于 Koa，模版引擎为 hbs。

  - ts 代码需编译为 js
  - koa-views 配置模版引擎
  - koa-router 配置路由
  - localhost 已配置为 https 服务
  - 支持 ssr + spa 混合模式（搭建 ing）

- 前端部分基于 React + ts，webpack 编译后可被 Node 服务访问
  - 增加 latex 模版支持

## 开发说明

运行 `npm run start:dev`，修改代码可不必重新启动项目。

### 1. 如何配置 localhost 为 https

[原文链接](https://juejin.im/post/5cff091ee51d455cd73ba068)

#### 步骤一：根 SSL 证书

生成一个 RSA-2048 密钥并将其保存到文件 rootCA.key 中。此文件将用作生成根 SSL 证书的密钥。每次使用此特定密钥生成证书时，都会提示您输入一个 pass 短语。

```sh
openssl genrsa -des3 -out rootCA.key 2048
```

这一步要求输入的 pass 短语，每次访问该 rootCA.key 文件时都需要使用。配置好并记住即可，例如 test_openssl。

下面，你可以使用生成的密钥创建新的根 SSL 证书。将它保存到一个名为 rootCA.pem 的文件中。本证书有效期为 1024 天。你可以随意把它改成你想要的天数。还会提示您输入其他可选信息。

```sh
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
```

#### 步骤二：信任根 SSL 证书

打开 Mac 上的密钥串访问，进入系统密钥链中的证书类别。使用文件 > 导入项目，导入文件 rootCA.pem。双击导入的证书，并在“信任”的选项下拉框中选择“始终信任”。

#### 步骤三：域 SSL 证书

现在可以使用根 SSL 证书专门为位于 localhost 的本地开发环境颁发证书。

创建一个新的 OpenSSL 配置文件 server.csr.cnf，以便在创建证书时导入这些设置，而不是在命令行中输入它们。

然后创建一个 v3.ext 文件以创建一个 X509 v3 证书。注意这里是如何指定 subjectAltName 的。

> 注：这两个文件已经在项目根目录当中了。

使用 server.csr.cnf 中存储的配置设置为本地主机创建证书密钥。此密钥存储在 server.key 中。

```sh
openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config <( cat server.csr.cnf )
```

证书签名请求通过前面创建的根 SSL 证书发出，以便为 localhost 创建域证书。输出是一个名为 server.crt 的证书文件。

```sh
openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext
```

#### 使用新的 SSL 证书

使用代码：

```ts
const certOptions = {
  key: fs.readFileSync(path.resolve("./server.key")),
  cert: fs.readFileSync(path.resolve("./server.crt"))
};

const server = https.createServer(certOptions, app.callback()).listen(443);
```

### 2. 直接启动

在控制台运行 `npm run start`，访问地址 https://localhost/resume
