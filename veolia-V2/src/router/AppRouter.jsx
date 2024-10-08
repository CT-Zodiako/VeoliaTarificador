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
import { Costo } from "../procesos/pages/Costo";
import { Crear } from "../proyecciones/pages/Crear";
import { LineasTiempo } from "../proyecciones/pages/LineasTiempo";
import { SubsidiosContribuciones } from "../proyecciones/pages/SubsidiosContribuciones";
import { CreciemientoVariables } from "../proyecciones/pages/CreciemientoVariables";
// import { PrivateRouters } from "./PrivateRouters";
import { DetalladoFacturacion } from "../informesComerciales/pages/DetalladoFacturacion";
import { CargueSemestral } from "../cargueInformacion/page/CargueSemestral";
import { CargueMensual } from "../cargueInformacion/page/CargueMensual";
import { HistorialCertificacion } from "../informesComerciales/pages/HistorialCertificacion";
import { HistorialProductividad } from "../informesComerciales/pages/HistorialProductividad";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>,
        errorElement: <h1>error</h1>,
    },
    {
        path: "/",
        element: <VeoliaApp />,
        // element: <PrivateRouters><VeoliaApp /></PrivateRouters>,
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
                path: "/cra",
                element: <IndicesCRA />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/subcon",
                element: <SubConPage/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/verificacion",
                element: <Verificacion/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/aprovechamiento",
                element: <ActivarAprovechamiento/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/costoPoda",
                element: <CostoPoda/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/productividad",
                element: <AjustesProductividad/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/descuento",
                element: <DescuentoCosto/>,
                errorElement: <h1>error</h1>,
            },

            //Informes Comerciales
            {
                path: "/tarifas",
                element: <DetalladoTarifasComerciales />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/facturacion",
                element: <DetalladoFacturacion />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/histCertificacion",
                element: <HistorialCertificacion />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/histProductividad",
                element: <HistorialProductividad />,
                errorElement: <h1>error</h1>,
            },

            //Informes Gerenciales
            {
                path: "/gentarifas",
                element: <DetalladoTarifasGerenciales />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/detsubaporte",
                element: <DataDetalladoSubAport />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/detcostos",
                element: <DetalladoCosto />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/dashboardtarifas",
                element: <DashBoardTarifas />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/costopodagerencial",
                element: <CostoPodainfo />,
                errorElement: <h1>error</h1>,
            },

            //Cargue Informacion
            {
                path: "/carguesem",
                element: <CargueSemestral />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/cargue",
                element: <CargueMensual />,
                errorElement: <h1>error</h1>,
            },

            //Reporteador Sui
            {
                path: "/suisui",
                element: <FormatosFormularios />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/SuiDashBoard",
                element: <DashBoardSUI />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/resumenFormatos",
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
            {
                path: "/lineastiempo",
                element: <LineasTiempo/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/subsidioscontribuciones",
                element: <SubsidiosContribuciones/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/crecimientovariables",
                element: <CreciemientoVariables/>,
                errorElement: <h1>error</h1>,
            },

            // Informes Proyecciones
            {
                path: "/generales",
                element: <InformesProyecciones />,
                errorElement: <h1>error</h1>,
            },
            //PGIRS
            {
                path: "/infopgirs",
                element: <InformePGIRSPage />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/informepgirs",
                element: <ResumenPGIRS />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/variablespgris",
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
                path: "/reversion_auth",
                element: <AutorizacionReversiones />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/detareversiones",
                element: <DetallesReversion />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/detautorizacion",
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


]);