import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { products } = useSelector((state) => state?.products);

  if (!products) {
    return <Navigate to="/product/:id" />;
  }
  return children;
};

export default PrivateRoute;
