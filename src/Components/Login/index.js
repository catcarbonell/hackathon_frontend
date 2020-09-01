import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {
  const [hasAcct, setAcct] = useState(true);
  const handleAcct = () => setAcct(!hasAcct);
    
  return (
    <div className="m-auto">
        {!hasAcct &&  <SignUp handleAcct={handleAcct} />}
        {hasAcct && <SignIn handleAcct={handleAcct} />}
    </div>

  );
}

export default Login;
