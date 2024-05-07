import { createBrowserRouter } from "react-router-dom";
import { VeoliaApp } from "../VeoliaApp";
import { LoginPage } from "../auth/pages/LoginPage";
import { APSpage } from "../auth/pages/APSpage";
import { FormatosFormularios } from "../reporteadorSui/pages/FormatosFormularios";
import { ResumenFormatosFormularios } from "../reporteadorSui/pages/ResumenFormatosFormularios";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <VeoliaApp />,
        errorElement: <h1>error</h1>,
        children: [
            {
                path: "/aps",
                element: <APSpage />,
                errorElement: <h1>error</h1>,
            },

            {
                path: "/formatosFormularios",
                element: <FormatosFormularios />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/resmunenFormatosFormularios",
                element: <ResumenFormatosFormularios />,
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