import React from "react";

export class Layout extends React.Component {
  render() {
    return <div>hellow ssr</div>;
  }
}

export function htmlTemplate(reactDom) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>React SSR</title>
      </head>
      <body>
          <div id="app">${reactDom}</div>
      </body>
      <style>
        #app {
          color: RGBA(97, 175, 239, 1.00);
        }
      </style>
      </html>
  `;
}
