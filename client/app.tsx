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

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/resume" component={Template0} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
