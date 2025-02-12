import React, { useEffect } from 'react'
import { SelectorSistemaLogin } from '../components/SelectorSistemaLogin';
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { login } from '../services/AuthService';
import { Alertas } from '../../ui/components/Alertas';
import { useAlertas } from '../../hooks/useAlertas';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [ sisuCorreo, setEmail ] = useState('');
  const [ sisuPass, setPassword ] = useState('');
  const [ sistema, setSistema ] = useState('');
  const [ estadoBoton, setEstadoBoton ] = useState(false);
  // const [ alerta, setAlerta ] = useState([]);    
  const { alerta, agregarAlerta, onCerrarAlerta } = useAlertas();
  

  useEffect(() => {
    setEstadoBoton(!(sisuCorreo && sisuPass && sistema));
  }, [sisuCorreo, sisuPass, sistema]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const idSistema = Number(sistema);
      const data = { sisuCorreo, sisuPass, idSistema: idSistema }
      const response = await login(data);
      const { token } = response;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      if (token){
        setEstadoBoton(true);
        navigate('/');
      } else {
        agregarAlerta('Error al iniciar sesión', 'error');
      };
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      agregarAlerta('Error al iniciar sesión', 'error');
    }
  };

  // const agregarAlerta = (mensaje, tipo = "info") => {
  //   const id = new Date().getTime();
  //   setAlerta((prevAlertas) => [...prevAlertas, { id, mensaje, tipo }]);

  //   setTimeout(() => {
  //     setAlerta((prevAlertas) => prevAlertas.filter((alerta) => alerta.id !== id));
  //   }, 3000);
  // };

  // const onCerrarAlerta = (alert) => {
  //   setAlerta((prevAlertas) =>
  //     prevAlertas.filter((a) => a.id !== alert)
  //   );
  // };

  return (
    <>
      <div className='login'>
        <div className='sesion'>
          <img src="../assets/Veolia_sml.png" alt="Veolia" style={{ height: '80px', width: 'auto', marginBottom: '2rem' }} />
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="sisuCorreo">Correo electrónico:</label>
              <input
                type="email"
                id="sisuCorreo"
                value={sisuCorreo}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="sisuPass">Contraseña:</label>
              <input
                type="password"
                id="sisuPass"
                value={sisuPass}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <SelectorSistemaLogin usuario={sisuCorreo} sistema={sistema} setSistema={setSistema}/>
            </div>
            <button 
              type="submit"
              className="boton-login"
              style={{
                backgroundColor: estadoBoton ? 'rgba(225,31,31,0.5)' : 'rgb(225,31,31)',
                cursor: estadoBoton ? 'not-allowed' : 'pointer',
                borderRadius: '10px',
              }}
              disabled={estadoBoton}
            >
              Iniciar sesión
            </button>
          </form>
        </div>
          {alerta.length > 0 &&
            <Alertas alerta={alerta} onCerrarAlerta={onCerrarAlerta}/>
          }
      </div>
    </>
  );
}
