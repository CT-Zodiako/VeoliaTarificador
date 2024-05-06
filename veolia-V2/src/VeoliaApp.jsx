import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from './ui/pages/Menu'

export const VeoliaApp = () => {
    return (
        <>
            <h1>Veolia App</h1>
            <Menu />
            <Outlet />
        </>
    )
}
