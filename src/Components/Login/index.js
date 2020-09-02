import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {
  const [hasAcct, setAcct] = useState(true);
  const handleAcct = () => setAcct(!hasAcct);
    
  return (
    <div id="login-page" className="w-full h-screen flex flex-col self-center justify-center items-center content-center">
        {!hasAcct &&  <SignUp handleAcct={handleAcct} />}
        {hasAcct && <SignIn handleAcct={handleAcct} />}
    </div>

  );
}

export default Login;
