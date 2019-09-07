import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => <div>Home</div>;
const Hello = () => <div>Hello</div>;

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/hello" component={Hello} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
