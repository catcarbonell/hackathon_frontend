import React, { useState } from 'react';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import './tailwind.output.css';

function App() {
  const [isAuth, setAuth] = useState(false);
  const handleAuth = () => setAuth(!isAuth);
    
  return (
    <div className="App">
      <div className="w-full h-screen flex content-center">
        <div className="md:w-64 w-1/2 h-auto m-auto">
            <h1 className="text-5xl text-custom-red text-center mb-4">Us to You</h1>
            {!isAuth &&  <SignUp handleAuth={handleAuth} />}
            {isAuth && <SignIn handleAuth={handleAuth} />}
        </div>
      </div>
    </div>
  );
}

export default App;
