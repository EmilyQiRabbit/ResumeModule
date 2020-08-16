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

// 加入 latex 会导致报错「 Can't resolve './documentclasses'...」，先去掉吧。
// const TemplateLatex: any = Loadable({
//   loader: () =>
//     import(
//       /* webpackChunkName: 'latextemplate' */
//       "@pages/LatexTemplate"
//     ),
//   loading: function() {
//     return null;
//   }
// });

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/resume/0" component={Template0} />
      {/* <Route path="/resume/latex" component={TemplateLatex} /> */}
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
