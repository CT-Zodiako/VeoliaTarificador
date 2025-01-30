import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRouters";
import { VeoliaApp } from "../VeoliaApp";
import { LoginPage, APSpage, UsuariosPage, EmpresasPage, RellenosPage } from '../auth/pages';
import { IndicesCRA, SubConPage, Verificacion, CostoPoda, ActivarAprovechamiento, AjustesProductividad, DescuentoCosto } from '../suministros/pages';
import { DetalladoTarifasComerciales, DetalladoFacturacion, HistorialCertificacion, HistorialProductividad } from '../informesComerciales/pages';
import { DetalladoCosto, DashBoardTarifas, CostoPodainfo, DetalladoTarifasGerenciales, DataDetalladoSubAport } from '../informesGerenciales/pages';
import { CargueSemestral, CargueMensual } from '../cargueInformacion/page';
import { ResumenFormatosFormularios, Reversiones, FormatosFormularios, DashBoardSUI } from '../reporteadorSui/pages';
import { Crear, LineasTiempo, SubsidiosContribuciones, CreciemientoVariables } from '../proyecciones/pages';
import { InformesProyecciones } from "../informeProyecciones/pages/InformesProyecciones";
import { InformePGIRSPage, ResumenPGIRS, VariablesPGIRS } from '../pgirs/pages';
import { Reversion, AutorizacionReversiones, DetallesReversion, DetallesAutorizacion } from '../reversiones/pages';
import { Calculo } from "../procesos/pages/Calculo";
import { Costo } from "../procesos/pages/Costo";
import { Proyectar } from "../proyecciones/pages/Proyectar";
import { CargueComplementario } from "../reporteadorSui/pages/CargueComplementario";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>,
        errorElement: <h1>error</h1>,
    },
    {
        path: "/",
        element: <VeoliaApp />,
        errorElement: <h1>error</h1>,
        children: [
            //TARIFICADOR
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
                path: "/carguecomplemento",
                element: <CargueComplementario />,
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
                // element: <Crear/>,
                element: <PrivateRoute path="/crear" element={<Crear />} />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/lineastiempo",
                // element: <LineasTiempo/>,
                element: <PrivateRoute path="/lineastiempo" element={<LineasTiempo />} />,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/subsidioscontribuciones",
                element: <SubsidiosContribuciones/>,
                errorElement: <h1>error</h1>,
            },
            {
                path: "/Proyectar",
                element: <Proyectar/>,
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

            //RELIQUIDACION

        ]

    },


]);