import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from './ui/pages/Menu'
import { Footer } from './ui/components/Footer'

export const VeoliaApp = () => {
    return (
        <>
            <h1>Veolia App</h1>
            <Menu />
            <Outlet />

           <Footer />
        </>
    )
}
