import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const Hello = () => <div>Hello</div>;
const World = () => <div>World</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/homepage/hello" component={Hello} />
      <Route path="/homepage/world" component={World} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
