import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (!sessionStorage.getItem("token")) {
    if (!localStorage.getItem("token")) {
      return <Navigate to={"/login"} />;
    }
  }
  return children;
};

export default ProtectedRoute;
