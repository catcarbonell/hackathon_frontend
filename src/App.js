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
          <div className="flex flex-col min-h-screen justify-between">
            <Navbar />

            <main className="flex flex-grow h-screen">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
              </Switch>
            </main>

            <Footer />
          </div>
      </div>

  );
}

export default App;
