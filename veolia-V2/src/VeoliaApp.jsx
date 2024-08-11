import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from './ui/pages/Menu'
import { Footer } from './ui/components/Footer'
import { LoginPage } from './auth/pages/LoginPage'

export const VeoliaApp = () => {
    // const [autorizacion, setAutorizacion] = useState(false);
    
    // const onAutorizacion = (estado) => {
    //     setAutorizacion(estado);
    //     console.log('mi autorizacion: ', autorizacion);
    // }

    return (
        <div className='veoliaComponents'>
            {/* { !autorizacion ? 
                <LoginPage onAutorizacion={onAutorizacion}/> :
                (
                    <>
                        <h1>Veolia App</h1>
                        <Menu />
                        <div className='bodyVeolia'>
                            <Outlet />
                        </div>
                        <div className='footerVeolia'>
                            <Footer />
                        </div>
                    </>
                )
            } */}
            <h1>Veolia App</h1>
            <Menu />
            <div className='bodyVeolia'>
                <Outlet />
            </div>
            <div className='footerVeolia'>
                <Footer />
            </div>
        </div>
    )
}
