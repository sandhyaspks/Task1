<<<<<<< HEAD
import { Navigate } from "react-router-dom";

function Auth(Component, role) {
  return function AuthenticatedComponent({ isAuth, user }) {
    if (!isAuth || user.role !== role) {
      return <Navigate to="/unauthorized" />;
    }
    return <Component user={user} />;
  };
}

export default Auth;
=======
import React from 'react'

const Auth= (Wrap)=>{
    return({isAuth,...props})=>
        {
        if(!isAuth)
    {
        return <p>
            access denied.
        </p>;
    }
    return<Wrap {...props}/>;
};
};


export default Auth
>>>>>>> 46304a03dc1ba6a767c32f7f1e503b1c4ff9d640
