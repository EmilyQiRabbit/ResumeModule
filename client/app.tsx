import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Loadable from "react-loadable";

const Template0: any = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'template0' */
      "@pages/Template0"
    ),
  loading: function() {
    return null;
  }
});

const World = () => <div>World</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/resume/page0" component={Template0} />
      <Route path="/resume/world" component={World} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
