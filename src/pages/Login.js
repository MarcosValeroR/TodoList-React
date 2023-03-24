import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import "../Components/LoginForm/login-form.css";

function Login({validated}) {
  return <LoginForm validated={validated} />;
}

export default Login;
