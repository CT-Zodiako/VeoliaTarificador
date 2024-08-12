// import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from './ui/pages/Menu'
import { Footer } from './ui/components/Footer'
// import { LoginPage } from './auth/pages/LoginPage'

export const VeoliaApp = () => {
    return (
        <div className='veoliaComponents'>
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
