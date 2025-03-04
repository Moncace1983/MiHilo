import React, { useState } from "react";
import "../styles/CambiarContraseña.css";

const CambiarContraseña = () => {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, currentPassword, newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Contraseña cambiada exitosamente");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña", error);
    }
  };

  return (
    <div className="password-container">
      <h2>Cambiar Contraseña</h2>
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
          <label htmlFor="current-password">Contraseña Actual</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">Nueva Contraseña</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cambiar Contraseña</button>
      </form>
       <a href="/login">Volver</a>       
    </div>
  );
};

export default CambiarContraseña;
