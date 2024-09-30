import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from './ui/pages/Menu'
import { Footer } from './ui/components/Footer'

export const VeoliaApp = () => {
    return (
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
    )
}
