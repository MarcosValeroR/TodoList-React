import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ValidateLogin from "../../Services/ValidateLogin";
function LoginForm({validated}) {

  const [user, setUser] = useState("")
  const [passwd, setPasswd] = useState("")
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if(ValidateLogin(user,passwd)){
      validated()
      navigate("todo")
    } else {
      window.alert("Usuario no existente")
    }
    

  }
  return (
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Inicia sesión</h1>
        <input
          className="input"
          type="email"
          placeholder="Introduzca su usuario..."
          required
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Introduzca su contraseña..."
          required
          onChange={(e) => setPasswd(e.target.value)}
        />
        <button className="btn-login" onClick={handleSubmit}>Iniciar sesión</button>
      </form>
  );
}

export default LoginForm;
