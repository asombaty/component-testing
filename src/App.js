import "./App.css";
import Login from "./Login";
import Success from "./Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/success" component={Success} />
        {/* Add other routes here if needed */}
      </Switch>
    </Router>
  );
}

export default App;
