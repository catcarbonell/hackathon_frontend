import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import "./tailwind.output.css";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <div className="App min-h-screen">
      <div className="flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/shoppingCart" component={ShoppingCart} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
