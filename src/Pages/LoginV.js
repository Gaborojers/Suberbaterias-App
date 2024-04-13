import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import "../Styles/Login.css";
import user from '@iconify-icons/mingcute/user-5-fill';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

function LoginV() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/vendedores/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ correo, contraseña })
      });
      const data = await response.json();
      if (response.ok) {
        // Redirigir al usuario a la página deseada después de iniciar sesión
        localStorage.setItem('vendedor', JSON.stringify(data.vendedor)); // Almacenar información del vendedor en localStorage
        navigate('/menu/menuVentasV'); // Cambia '/dashboard' por la ruta que desees
      } else {
        setMensajeError(data.mensaje); // Actualiza el estado para mostrar el mensaje de error
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <h1 style={{ left: '85%', fontFamily: 'Roboto, sans-serif', fontSize: '200%', position: 'absolute' }}>Super Baterías Más</h1>
      <div className='login'>
        <div style={{ textAlign: 'center' }}>
          <Icon icon={user} style={{ fontSize: '200px', marginBottom: '20px' }} />
        </div>
        <div className='formulario'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{position: 'absolute', left: '1%'}}>Correo</Form.Label>
              <br></br>
              <InputGroup>
                <FormControl type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              </InputGroup> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{position: 'absolute', left: '1%'}}>Contraseña</Form.Label>
              <br></br>
              <InputGroup>
                <FormControl type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
              </InputGroup>
            </Form.Group>
            <Button className='button' style={{position: 'absolute', left: '35%', top: '115%', height: '40%'}} variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
          {mensajeError && <p className="error-message">{mensajeError}</p>}
          <p className="admin-login-link">
            ¿Eres un administrador? <Link to="/administradores">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginV;
