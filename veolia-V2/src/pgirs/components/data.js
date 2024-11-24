export const meses = [
    {mes: 1, nombre: 'Enero'},
    {mes: 2, nombre: 'Febrero'},
    {mes: 3, nombre: 'Marzo'},
    {mes: 4, nombre: 'Abril'},
    {mes: 5, nombre: 'Mayo'},
    {mes: 6, nombre: 'Junio'},
    {mes: 7, nombre: 'Julio'},
    {mes: 8, nombre: 'Agosto'},
    {mes: 9, nombre: 'Septiembre'},
    {mes: 10, nombre: 'Octubre'},
    {mes: 11, nombre: 'Noviembre'},
    {mes: 12, nombre: 'Diciembre'}
];

export const variables = [
  {id: 11, nombre: 'LBL'},
  {id: 21, nombre: 'CESPED'},
  {id: 22, nombre: 'PODA'},
  {id: 23, nombre: 'LAVADO'},
  {id: 24, nombre: 'PLAYAS'},
  {id: 25, nombre: 'INSCESTAS'},
  {id: 26, nombre: 'MANCESTAS'}
];

export const frecuencias = [
  {id: 1, nombre: 'Mensual'},
  {id: 2, nombre: 'Semestral'},
  {id: 3, nombre: 'Anual'}
];

export const data = {
    data: [
        {
            PGRIVARIABLE: 11,
            valor: '',
            frecuencia: '',
        },
        {
            PGRIVARIABLE: 21,
            valor: '',
            frecuencia: '',
        },
        {
            PGRIVARIABLE: 22,
            valor: '',
            frecuencia: '',
        },
        {
            PGRIVARIABLE: 23,
            valor: '',
            frecuencia: '',
        },
        {
            PGRIVARIABLE: 24,
            valor: '',
            frecuencia: '',
        },
        {
            PGRIVARIABLE: 25,
            valor: '',
            frecuencia: '',
        },
        {
            PGRIVARIABLE: 26,
            valor: '',
            frecuencia: '',
        },
    ],
    APSAID: '',
    PGRIANNO: '',
    PGRIMES: '',
  };

  export const formatoResumenPgri = {
    "APSA_ID": { name: "APS", filtre: true },
    "PERIODO": { name: "INGRESO", filtre: true },
    "PGRINGRESO": { name: "TIPO INGRESO", filtre: true },
    "PGRIFECHA": { name: "FECHA INGRESO", filtre: false },
    "SISU_CORREO": { name: "USUARIO", filtre: false },
  };

  export const columnsResumenPgri = [
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "INGRESO", body: "PERIODO" },
    { head: "TIPO INGRESO", body: "PGRINGRESO" },
    { head: "FECHA INGRESO", body: "PGRIFECHA" },
    { head: "USUARIO", body: "SISU_CORREO" },
  ];