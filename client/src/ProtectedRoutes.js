import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import ROUTES from "./constants/routes";

function ProtectedRoute({ element }) {
  const { authenticated } = useSelector(store => store.auth);
  const location = useLocation();

  return authenticated ? (
    element
  ) : (
    <Navigate replace state={{ from: location }} to={ROUTES.SIGN_IN} />
  );
}

export default ProtectedRoute;
