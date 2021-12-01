import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.js";
import CoinData from "./Pages/CoinData";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/coin/:id" component={CoinData} />
      </Switch>
    </Router>
  );
}

export default App;
