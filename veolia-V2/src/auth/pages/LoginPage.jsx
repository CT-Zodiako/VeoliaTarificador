import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react';
import axios from 'axios';





export const LoginPage = () => {

  // Estado para almacenar el correo electrónico y la contraseña ingresados por el usuario
  const [sisuCorreo, setEmail] = useState('');
  const [sisuPass, setPassword] = useState('');

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Enviar una solicitud HTTP POST al endpoint de inicio de sesión en el backend
      const response = await axios.post('http://localhost:3000/api/auth/login', { sisuCorreo, sisuPass });

      // Si la solicitud fue exitosa, obtener el token JWT de la respuesta
      const { token } = response.data;

      // Guardar el token en el almacenamiento local (LocalStorage)
      localStorage.setItem('token', token);

      // Configurar Axios para enviar el token en los encabezados de autorización
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Redireccionar a la página de inicio o realizar cualquier otra acción necesaria
      // Por ejemplo, puedes usar React Router para redireccionar a otra página
      // history.push('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="sisuCorreo">Correo electrónico:</label>
          <input
            type="sisuCorreo"
            id="sisuCorreo"
            value={sisuCorreo}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="sisuPass">Contraseña:</label>
          <input
            type="sisuPass"
            id="sisuPass"
            value={sisuPass}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
  


    // const { form, onInputChange } = useForm({
    //     email: '',
    //     password: ''
    // });


    // const onSubmit = (e) => {
    //     // envio usuario contraseña sies correcto
    // }



    // return (
    //     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    //         <div className="card mb-3 col-6">
    //             <div className="row g-0 d-flex align-items-center">
    //                 <div className="col-lg-4 d-none d-lg-flex">
    //                     <img
    //                         src="/assets/veolia.jpg"
    //                         alt="Trendy Pants and Shoes"
    //                         className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
    //                     />
    //                 </div>
    //                 <div className="col-lg-8 ">
    //                     <div className="card-body py-3 px-md-3">

    //                         <form onSubmit={onSubmit}>
    //                             <div className="form-outline mb-3">
    //                                 <input
    //                                     type="email"
    //                                     className="form-control"
    //                                     name='email'
    //                                     value={form}
    //                                     onChange={onInputChange} />
    //                                 <label className="form-label">
    //                                     Correo
    //                                 </label>
    //                             </div>

    //                             <div className="form-outline mb-3">
    //                                 <input
    //                                     type="password"
    //                                     className="form-control"
    //                                     name='password'
    //                                     value={form}
    //                                     onChange={onInputChange} />
    //                                 <label className="form-label">
    //                                     Contraseña
    //                                 </label>
    //                             </div>

    //                             <button type="submit" className="btn btn-primary btn-block aling'">Conectar</button>
    //                         </form>

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}
