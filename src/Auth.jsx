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
