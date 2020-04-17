import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import path from "path";
import { Loading } from "./components/Loading";

export class ClientRouter extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

const Page1 = Loadable({
  loader: () => /* webpackChunkName: 'page1' */ import("./components/Page1"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Page1;
    return <Component {...props} />;
  },
  webpack: () => [(require as any).resolveWeak("./components/Page1")],
  modules: [path.join(__dirname, "./components/Page1")]
});

const Page2 = Loadable({
  loader: () => /* webpackChunkName: 'page2' */ import("./components/Page2"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Page2;
    return <Component {...props} />;
  },
  webpack: () => [(require as any).resolveWeak("./components/Page2")],
  modules: [path.join(__dirname, "./components/Page2")]
});

const Page3 = Loadable({
  loader: () => /* webpackChunkName: 'page3' */ import("./components/Page3"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Page3;
    return <Component {...props} />;
  },
  webpack: () => [(require as any).resolveWeak("./components/Page3")],
  modules: [path.join(__dirname, "./components/Page3")]
});
