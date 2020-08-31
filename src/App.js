import React, { useState } from 'react';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import './tailwind.output.css';

function App() {
  const [hasAcct, setAcct] = useState(true);
  const handleAcct = () => setAcct(!hasAcct);
    
  return (
    <div className="App">
      <div className="w-full h-screen flex content-center">
        <div className="md:w-1/5 md:min-w-64 w-1/2 h-auto m-auto">
            <h1 className="text-5xl text-custom-red text-center mb-4">Us to You</h1>
            {!hasAcct &&  <SignUp handleAcct={handleAcct} />}
            {hasAcct && <SignIn handleAcct={handleAcct} />}
        </div>
      </div>
    </div>
  );
}

export default App;
