import { createBrowserRouter } from "react-router-dom";
import { VeoliaApp } from "../VeoliaApp";
import { LoginPage } from "../auth/pages/LoginPage";
import { APSpage } from "../auth/pages/APSpage";
import { FormatosFormularios } from "../reporteadorSui/pages/FormatosFormularios";
import { ResumenFormatosFormularios } from "../reporteadorSui/pages/ResumenFormatosFormularios";
import { Reversiones } from "../reporteadorSui/pages/Reversiones";
import { UsuariosPage } from "../auth/pages/UsuarioPage";
import { InformesProyecciones } from "../informeProyecciones/pages/InformesProyecciones";
import { DetalladoCosto } from "../informesGerenciales/pages/DetalladoCosto";
import { DataDetalladoSubAport } from "../informesGerenciales/pages/DetalladoSubAport";
import { IndicesCRA } from "../suministros/pages/IndicesCRAPage";
import { SubConPage } from "../suministros/pages/SubsidiosContribucionesPage";
import { EmpresasPage } from "../auth/pages/EmpresasPage";
import { RellenosPage } from "../auth/pages/RellenosPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <VeoliaApp />,
        errorElement: <h1>error</h1>,
        children: [
            // configuracion
            {
                path: "/aps",
                element: <APSpage />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/empresas",
                element: <EmpresasPage />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/usuarios",
                element: <UsuariosPage />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/rellenos",
                element: <RellenosPage />,
                errorElement: <h1>error</h1>,
            },
            //Suministros
            {
                path: "/indicesCRA",
                element: <IndicesCRA />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/sub-con",
                element: <SubConPage/>,
                errorElement: <h1>error</h1>,
            },

            //Informes Gerenciales
            {
                path: "/detalladoCostos",
                element: <DetalladoCosto />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/dataDetalladoSubAport",
                element: <DataDetalladoSubAport />,
                errorElement: <h1>error</h1>,
            },

            //Reporteador Sui
            {
                path: "/formatosFormularios",
                element: <FormatosFormularios />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/resmunenFormatosFormularios",
                element: <ResumenFormatosFormularios />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/reversiones",
                element: <Reversiones />,
                errorElement: <h1>error</h1>,
            },
            
            // Informes Proyecciones
            {
                path: "/informesProyecciones",
                element: <InformesProyecciones />,
                errorElement: <h1>error</h1>,
            }
        ]

    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <h1>error</h1>,
    }


]);