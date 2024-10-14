import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu } from './ui/pages/Menu'
import { Footer } from './ui/components/Footer'
import { LoginPage } from './auth/pages/LoginPage'

export const VeoliaApp = () => {
    const navigate = useNavigate();
    const [autentificacion, setAutentificacion] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const tokenPayload = JSON.parse(atob(token.split('.')[1]));
                const expirationTime = tokenPayload.exp * 1000; // La expiración está en segundos, la convertimos a milisegundos

                if (Date.now() >= expirationTime) {
                    localStorage.removeItem("token");
                    navigate('/login');
                } else {
                    setAutentificacion(true);
                }
            } catch (error) {
                localStorage.removeItem("token");
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            {autentificacion ?
                <div className='veoliaComponents'>
                    <Menu />
                    <nav className='cabezote'/>
                    <main className='bodyVeolia'>
                        <Outlet />
                    </main>
                    <footer className='footerVeolia'>
                        <Footer />
                    </footer>
                </div>
            : <LoginPage />
            }
        </>
    )
}
