import React, { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
=======
import "../styles/Register.css"; 
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
=======
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
<<<<<<< HEAD
        body: JSON.stringify({ username, password, email }),
=======
        body: JSON.stringify({ username, password }),
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b
      });
      const data = await response.json();
      if (response.ok) {
        alert("Usuario registrado exitosamente");
<<<<<<< HEAD
        navigate("/login");
=======
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error);
    }
  };

  return (
    <div className="register-container">
<<<<<<< HEAD
      <h2>Registrarse</h2>
=======
      <h2>Registrar Usuario</h2>
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b
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
<<<<<<< HEAD
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
        <button className="botton-register" type="submit">Registrarse</button>
=======
        <button type="submit">Registrar</button>
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b
      </form>
    </div>
  );
};

export default Register;
