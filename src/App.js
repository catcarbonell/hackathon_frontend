import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Businesses from "./Components/Businesses";
import Details from "./Components/Businesses/Details";
import "./tailwind.output.css";

function App() {
  return (
    <div className="App min-h-screen overflow-hidden">
      <div className="box-border flex flex-col">
        <Navbar />
        <main className="box-border flex-1">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/businesses" component={Businesses} />
            <Route path="/details" component={Details} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
