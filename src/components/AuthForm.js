import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

const AuthForm = ({ type }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = type === 'login' ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users/change-password';
    const body = type === 'login' ? { username, password } : { username, currentPassword, newPassword };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.ok) {
        if (type === 'login') {
          localStorage.setItem('token', data.token);
          navigate('/inicio');
        } else {
          alert('Contraseña cambiada exitosamente');
        }
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(`Error al ${type === 'login' ? 'iniciar sesión' : 'cambiar la contraseña'}`, error);
    }
  };

  return (
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
      {type === 'login' ? (
        <>
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
          <Link to="/inicio">
          <button type="submit">Ingresar</button>
          </Link>
        </>
      ) : (
        <>
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
        </>
      )}
    </form>
  );
};

export default AuthForm;