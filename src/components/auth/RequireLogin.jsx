import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";

const RequireLogin = ({ children }) => {
  const role = useSelector((state) => state.auth.userRole);
  const token = useSelector((state) => state.auth.token);
  console.log(role);
  if (!token) {
    return <Navigate to="/login" />;
  }
  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

RequireLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireLogin;
