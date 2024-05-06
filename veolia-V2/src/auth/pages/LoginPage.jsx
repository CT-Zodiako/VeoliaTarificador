import React from 'react'
import { useForm } from '../../hooks/useForm'





export const LoginPage = () => {

    const { form, onInputChange } = useForm({
        email: '',
        password: ''
    });


    const onSubmit = (e) => {
        // envio usuario contraseña sies correcto
    }



    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card mb-3 col-6">
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-lg-4 d-none d-lg-flex">
                        <img
                            src="/assets/veolia.jpg"
                            alt="Trendy Pants and Shoes"
                            className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                        />
                    </div>
                    <div className="col-lg-8 ">
                        <div className="card-body py-3 px-md-3">

                            <form onSubmit={onSubmit}>
                                <div className="form-outline mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name='email'
                                        value={form}
                                        onChange={onInputChange} />
                                    <label className="form-label">
                                        Correo
                                    </label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name='password'
                                        value={form}
                                        onChange={onInputChange} />
                                    <label className="form-label">
                                        Contraseña
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block aling'">Conectar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
