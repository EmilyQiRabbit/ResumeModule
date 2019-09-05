#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function homePage(ctx, _next) {
  const manifest = fs
    .readFileSync(path.resolve(__dirname, "../client/index.html"))
    .toString();
  ctx.response.type = "html";
  ctx.response.body = manifest;
}

module.exports = {
  homePage
};
