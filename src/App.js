import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Login from './Components/Login';
import './tailwind.output.css';

function App() {
  return (
    <div className="App min-h-screen">
       
      <div className="flex flex-col">
        <Navbar />
          <main className="flex-1 my-8">
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
