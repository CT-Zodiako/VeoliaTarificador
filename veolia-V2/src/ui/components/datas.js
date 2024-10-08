//RESUMEN PGIRS
export const filas = [
    {id: 1, nombre: 'APSA_NOMAPS'},
    {id: 2, nombre: 'PERIODO'},
    {id: 3, nombre: 'PGRINGRESO'},
    {id: 4, nombre: 'PGRIFECHA'},
    {id: 5, nombre: 'SISU_CORREO'}
];

export const Menu = [
    {
        id: 100,
        label: "Inicio",
        icon: "pi pi-fw pi-home",
        to: "/",
    },
    {
        id: 200,
        label: "Configuración",
        icon: "pi pi-fw pi-th-large",
        to: "",
        items: [
          {
            id: 201,
            label: "APS",
            icon: "",
            to: "/aps",
          },
          {
            id: 202,
            label: "Empresas",
            icon: "",
            to: "/empresas",
          },
          {
            id: 203,
            label: "Rellenos",
            icon: "",
            to: "/rellenos",
          },
          {
            id: 204,
            label: "Usuarios",
            icon: "",
            to: "/usuarios",
          },
        ],
      },
      {
        id: 300,
        label: "Suministros",
        icon: "pi pi-fw pi-cloud-upload",
        to: "",
        items: [
          {
            id: 301,
            label: "Indices CRA",
            icon: "pi pi-fw pi-user-edit",
            to: "/cra",
          },
          {
            id: 302,
            label: "Subsidios Contribuciones",
            icon: "pi pi-fw pi-sliders-h",
            to: "/subcon",
          },
          {
            id: 303,
            label: "Ajuste Productividad",
            icon: "pi pi-fw pi-pencil",
            to: "/productividad",
          },
          {
            id: 307,
            label: "Verificacion",
            icon: "pi pi-search",
            to: "/verificacion",
          },
          {
            id: 308,
            label: "Activar Aprovechamiento",
            icon: "pi pi-sliders-v",
            to: "/aprovechamiento",
          },
          {
            id: 309,
            label: "Costo de Poda",
            icon: "pi pi-sliders-v",
            to: "/costoPoda",
          },
          {
            id: 310,
            label: "Descuentos en Costos",
            icon: "pi pi-fw pi-sort-numeric-down-alt",
            to: "/descuento",
          },

        ],
      },
      {
        id: 400,
        label: "Procesos",
        icon: "pi pi-fw pi-cog",
        to: "",
        items: [
          {
            id: 401,
            label: "Cálculo Tarifas",
            icon: "pi pi-fw pi-chart-line",
            to: "/calculo",
          },
        ],
      },
      {
        id: 500,
        label: "Informes Comerciales",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 501,
            label: "Detallado Tarifas",
            icon: "pi pi-fw pi-th-large",
            to: "/tarifas",
          },
          {
            id: 502,
            label: "Detallado Facturación",
            icon: "pi pi-fw pi-window-maximize",
            to: "/facturacion",
          },
          {
            id: 503,
            label: "Historial de Certificación",
            icon: "pi pi-fw pi-window-maximize",
            to: "/histCertificacion",
          },
          {
            id: 504,
            label: "Historial de Productividad",
            icon: "pi pi-fw pi-window-maximize",
            to: "/histProductividad",
          },
        ],
      },
      {
        id: 600,
        label: "Informes Gerenciales",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 601,
            label: "Detallado Tarifas",
            icon: "pi pi-fw pi-th-large",
            to: "/gentarifas",
          },
          {
            id: 602,
            label: "Detallado de Costos",
            icon: "pi pi-fw pi-window-maximize",
            to: "/detcostos",
          },
          {
            id: 603,
            label: "Detallado Sub y Aportes",
            icon: "pi pi-fw pi-window-maximize",
            to: "/detsubaporte",
          },
          {
            id: 604,
            label: "DashBoard",
            icon: "pi pi-fw pi-bookmark",
            to: "/dashboardtarifas",
          },
          {
            id: 605,
            label: "Actualizacion de Costos",
            icon: "pi pi-fw pi-sort-numeric-down-alt",
            to: "/actualizacioncostos",
          },
          {
            id: 606,
            label: "Costo de Poda",
            icon: "pi pi-fw pi-th-large",
            to: "/costopodagerencial",
          },


        ],
      },
      {
        id: 700,
        label: "Cargue de Informacion",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 701,
            label: "Cargue Mensual",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/cargue",
          },
          {
            id: 702,
            label: "Cargue Semestral",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/carguesem",
          },
        ],
      },
      {
        id: 800,
        label: "Reporteador SUI",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 801,
            label: "Formatos y Formularios",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/suisui",
          },
          {
            id: 802,
            label: "Cargue Complementario",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/carguecomplemento",
          },
          {
            id: 803,
            label: "DashBoard",
            icon: "pi pi-fw pi-bookmark",
            to: "/SuiDashBoard",
          },
          {
            id: 804,
            label: "Resumen Formatos y Formularios",
            icon: "pi pi-fw pi-file",
            to: "/resumenFormatos",
          },
          {
            id: 805,
            label: "Reversiones",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/reversiones_sui",
          },
        ],
      },
      {
        id: 900,
        label: "Proyecciones",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 901,
            label: "Crear",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/crear",
          },
          {
            id: 902,
            label: "Lineas de Tiempo",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/lineastiempo",
          },
          {
            id: 903,
            label: "Crecimiento Variables",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/crecimientovariables",
          },
          {
            id: 904,
            label: "Proyectar",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/proyectar",
          },
          {
            id: 905,
            label: "Subsidios/Contribuciones",
            icon: "pi pi-fw pi-sort-amount-up-alt",
            to: "/subsidioscontribuciones",
          },
        ],
      },
      {
        id: 1000,
        label: "Informes Proyecciones",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 1001,
            label: "Generales",
            icon: "pi pi-fw pi-th-large",
            to: "/generales",
          },
        ],
      },

      {
        id: 2000,
        label: "PGIRS",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 2001,
            label: "Variables PGIRS",
            icon: "pi pi-sliders-h",
            to: "/variablespgris",
          },
          {
            id: 2002,
            label: "Informe PGIRS",
            icon: "pi pi-fw pi-th-large",
            to: "/infopgirs",
          },
          {
            id: 2003,
            label: "Resumen variables PGIRS",
            icon: "pi pi-fw pi-th-large",
            to: "/informepgirs",
          }
        ],
      },
      {
        id: 3000,
        label: "Reversiones",
        icon: "pi pi-fw pi-chart-bar",
        to: "",
        items: [
          {
            id: 3001,
            label: "Reversiones",
            icon: "pi pi-fw pi-undo",
            to: "/reversiones",
          },
          {
            id: 3002,
            label: "Detallado Reversiones",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/detareversiones",
          },
          {
            id: 3003,
            label: "Autorizacion Reversiones",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/reversion_auth",
          },
          {
            id: 3004,
            label: "Detalle Autorizacion",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/detautorizacion",
          },
        ],
    }
];

