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
        if(token) {
            setAutentificacion(true);
        } else {
            navigate('/login');
        }
    }, []);

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
