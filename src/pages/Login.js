import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Usuario y contraseña de prueba
    const testUsername = " ";
    const testPassword = " ";

    if (username === testUsername && password === testPassword) {
      // Simular una respuesta exitosa del servidor
      const data = { token: "fake-jwt-token" };
      localStorage.setItem("token", data.token);
      navigate("/inicio");
    } else {
      try {
        const response = await fetch("/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.token);
          navigate("/inicio");
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Error al iniciar sesión", error);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <div className="links">
        <a href="/cambiar-contraseña">Olvidé mi contraseña</a> |
        <a href="/registro">Registrarse</a>
      </div>
    </div>
  );
};

export default Login;
