export const columnsCrearReliq = [
    { head: "RELIQUIDACION", body: "relqid" },
    { head: "APS", body: "apsaid" },
    { head: "NOMBRE", body: "relqnombre" },
    { head: "DESCRIPCION", body: "relqdescrip" },
    { head: "DESDE", body: "relqdesde" },
    { head: "HASTA", body: "relqhasta" },
    { head: "USU. SOLICITA", body: "relqususolicita" },
    { head: "ESTADO", body: "relqestado" },
    { head: "FECHA", body: "relqfecha" },
    { head: "IDATT", body: "relqidatt" },
    { head: "USU. APRUEBA", body: "relqusuaprueba" },
];

export const formatoCrearRelq = {
    'relqid': { name: 'RELIQUIDACION', filtre: true },
    'apsaid': { name: 'APS', filtre: true },
    'relqnombre': { name: 'NOMBRE', filtre: true },
    'relqdescrip': { name: 'DESCRIPCION', filtre: false },
    'relqdesde': { name: 'DESDE', filtre: false },
    'relqhasta': { name: 'HASTA', filtre: false },
    'relqususolicita': { name: 'USU. SOLICITA', filtre: false },
    'relqestado': { name: 'ESTADO', filtre: true },
    'relqfecha': { name: 'FECHA', filtre: true },
    'relqidatt': { name: 'IDATT', filtre: true },
    'relqusuaprueba': { name: 'USU. APRUEBA', filtre: true },
};
