import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
body: JSON.stringify({ username, password, email }),
      });
      await response.json();
      alert("Usuario registrado exitosamente");
    navigate("/login");
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      alert("El usuario ya existe");
    } else {
      alert("Error al registrar el usuario");
      console.error("Error al registrar el usuario", error);
    }
  }
};

  return (
    <div className="register-container">
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
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
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="button-register" type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
