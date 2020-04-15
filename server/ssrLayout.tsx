import React from "react";
import { Link, Switch, Route } from "react-router-dom";

export class Layout extends React.Component {
  render() {
    return (
      <>
        <div>
          <Link to="/page1">page1</Link>
          <Link to="/page2">page2</Link>
          <Link to="/page3">page3</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/page1" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
          <Route path="/page3" exact component={Page3} />
        </Switch>
      </>
    );
  }
}

function Page1() {
  return <div>hello world 1</div>;
}

function Page2() {
  return <div>hello world 2</div>;
}

function Page3() {
  return <div>hello world 3</div>;
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
