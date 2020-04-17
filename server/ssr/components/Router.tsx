import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
// import path from "path";
import { Loading } from "./Loading";

export class Router extends React.Component {
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
  loader: () => import("./Page1"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Page1;
    return <Component {...props} />;
  },
  modules: ["./Page1"]
});

const Page2 = Loadable({
  loader: () => import("./Page2"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Page2;
    return <Component {...props} />;
  },
  modules: ["./Page2"]
});

const Page3 = Loadable({
  loader: () => import("./Page3"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Page3;
    return <Component {...props} />;
  },
  modules: ["./Page3"]
});
