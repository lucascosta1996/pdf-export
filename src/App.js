import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Manufacturers from "./components/Manufacturers/Manufacturers";
import Navigation from "./components/Navigation/Navigation";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Orders} />
      <Route exact path="/pedidos" component={Orders} />
      <Manufacturers />
    </Router>
  );
}

export default App;
