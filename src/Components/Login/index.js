import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {
  const [hasAcct, setAcct] = useState(true);
  const handleAcct = () => setAcct(!hasAcct);
    
  return (
    <>
        {!hasAcct &&  <SignUp handleAcct={handleAcct} />}
        {hasAcct && <SignIn handleAcct={handleAcct} />}
    </>

  );
}

export default Login;
