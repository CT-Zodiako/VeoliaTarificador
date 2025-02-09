export const columnsCrearReliq = [
    { head: "RELIQUIDACION", body: "RELQID" },
    { head: "APS", body: "APSAID" },
    { head: "NOMBRE", body: "RELQNOMBRE" },
    { head: "DESCRIPCION", body: "RELQDESCRIP" },
    { head: "DESDE", body: "RELQDESDE" },
    { head: "HASTA", body: "RELQHASTA" },
    { head: "USU. SOLICITA", body: "RELQUSUSOLICITA" },
    { head: "ESTADO", body: "RELQESTADO" },
    { head: "FECHA", body: "RELQFECHA" },
    { head: "IDATT", body: "RELQIDATT" },
    { head: "USU. APRUEBA", body: "RELQUSUAPRUEBA" },
];

export const formatoCrearRelq = {
    'RELQID': { name: 'RELIQUIDACION', filtre: true },
    'APSAID': { name: 'APS', filtre: true },
    'RELQNOMBRE': { name: 'NOMBRE', filtre: true },
    'RELQDESCRIP': { name: 'DESCRIPCION', filtre: false },
    'RELQDESDE': { name: 'DESDE', filtre: false },
    'RELQHASTA': { name: 'HASTA', filtre: false },
    'RELQUSUSOLICITA': { name: 'USU. SOLICITA', filtre: false },
    'RELQESTADO': { name: 'ESTADO', filtre: true },
    'RELQFECHA': { name: 'FECHA', filtre: true },
    'RELQIDATT': { name: 'IDATT', filtre: true },
    'RELQUSUAPRUEBA': { name: 'USU. APRUEBA', filtre: true },
};
