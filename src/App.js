import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Login from './Components/Login';
import './tailwind.output.css';

function App() {

  return (

      <div className="App">

          <div className="w-full h-screen flex content-center">
            <Navbar />

            <div className="md:w-3/4 md:min-h-0 w-full h-auto m-auto">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
            <Footer />
          </div>

      </div>

  );
}

export default App;
