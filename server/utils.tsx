export function htmlTemplate(rendered) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>React SSR</title>
      </head>
      <body>
          <div id="app">${rendered.html}</div>
          ${rendered.scripts.join("\n")}
      </body>
      <style>
        #app {
          color: RGBA(97, 175, 239, 1.00);
          font-size: 16px;
        }
        a {
          color: RGBA(97, 175, 239, 1.00);
          margin-right: 10px;
          font-size: 14px;
        }
      </style>
      </html>
  `;
}
