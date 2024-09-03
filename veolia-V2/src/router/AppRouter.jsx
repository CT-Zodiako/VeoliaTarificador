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
import { InformePGIRSPage } from "../pgirs/pages/InformePGIRSPage";
import { ResumenPGIRS } from "../pgirs/pages/ResumenPGIRS";
import { VariablesPGIRS } from "../pgirs/pages/VariablesPGIRS";
import { Verificacion } from "../suministros/pages/Verificacion";
import { ActivarAprovechamiento } from "../suministros/pages/ActivarAprovechamiento";
import { CostoPoda } from "../suministros/pages/CostoPoda";
import { AjustesProductividad } from "../suministros/pages/AjustesProductividad";
import { DescuentoCosto } from "../suministros/pages/DescuentoCosto";
import { DetalladoTarifasGerenciales } from "../informesGerenciales/pages/DetalladoTarifasGerenciales";
import { DetalladoTarifasComerciales } from "../informesComerciales/pages/DetalladoTarifasComerciales";
import { DashBoardTarifas } from "../informesGerenciales/pages/DashBoardTarifas";
import { CostoPodainfo } from "../informesGerenciales/pages/CostoPodaInfo";
import { DashBoardSUI } from "../reporteadorSui/pages/DashBoardSUI";
import { Reversion } from "../reversiones/pages/Reversion";
import { AutorizacionReversiones } from "../reversiones/pages/AutorizacionReversiones";
import { DetallesReversion } from "../reversiones/pages/DetallesReversion";
import { DetallesAutorizacion } from "../reversiones/pages/DetallesAutorizacion";
import { Calculo } from "../procesos/pages/Calculo";
import { Costo } from "../procesos/components/Costo";

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
            {
                path: "/sub-verf",
                element: <Verificacion/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/sub-aproch",
                element: <ActivarAprovechamiento/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/sub-costPoda",
                element: <CostoPoda/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/sub-ajutProd",
                element: <AjustesProductividad/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/sub-desCost",
                element: <DescuentoCosto/>,
                errorElement: <h1>error</h1>,
            },

            //Informes Comerciales
            {
                path: "/dataDetalladoTarifasCo",
                element: <DetalladoTarifasComerciales />,
                errorElement: <h1>error</h1>,
            },

            //Informes Gerenciales
            {
                path: "/dataDetalladoTarifas",
                element: <DetalladoTarifasGerenciales />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/dataDetalladoSubAport",
                element: <DataDetalladoSubAport />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/detalladoCostos",
                element: <DetalladoCosto />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/dashBoardTarifas",
                element: <DashBoardTarifas />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/costoPodaInfo",
                element: <CostoPodainfo />,
                errorElement: <h1>error</h1>,
            },

            //Reporteador Sui
            {
                path: "/formatosFormularios",
                element: <FormatosFormularios />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/DashBoardSUI",
                element: <DashBoardSUI />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/resmunenFormatosFormularios",
                element: <ResumenFormatosFormularios />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/reversiones_sui",
                element: <Reversiones />,
                errorElement: <h1>error</h1>,
            },

            //Proyecciones
            {
                path: "/crear",
                element: <Crear/>,
                errorElement: <h1>error</h1>,
            },

            // Informes Proyecciones
            {
                path: "/informesProyecciones",
                element: <InformesProyecciones />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/informePGIRS",
                element: <InformePGIRSPage />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/resumenPGIRS",
                element: <ResumenPGIRS />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/variablesPGIRS",
                element: <VariablesPGIRS />,
                errorElement: <h1>error</h1>,
            },

            // Reversiones
            {
                path: "/reversiones",
                element: <Reversion />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/auth_reversiones",
                element: <AutorizacionReversiones />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/detalles_reversiones",
                element: <DetallesReversion />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/detalles_autorizacion",
                element: <DetallesAutorizacion />,
                errorElement: <h1>error</h1>,
            },
            //Procesos
            {
                path: "/calculo",
                element: <Calculo />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/costo",
                element: <Costo />,
                errorElement: <h1>error</h1>,
            },
        ]

    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <h1>error</h1>,
    }


]);