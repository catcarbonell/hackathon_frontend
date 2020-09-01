import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import './tailwind.output.css';

function App() {
  const [hasAcct, setAcct] = useState(true);
  const handleAcct = () => setAcct(!hasAcct);
    
  return (
    <div className="App">
      <div className="w-full h-screen flex content-center">
        {/* IF AUTHENTICATED, SHOW NAVBAR && DASHBOARD */}
        <Navbar />
        <Dashboard />
        <div className="md:w-3/4 md:min-w-64 w-full h-auto m-auto">
            <h1 className="text-5xl text-white text-center mb-4">Us to You</h1>
            {!hasAcct &&  <SignUp handleAcct={handleAcct} />}
            {hasAcct && <SignIn handleAcct={handleAcct} />}
            
        </div>
      </div>
    </div>
  );
}

export default App;
