export const columnsDetaReversiones = [
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "AÑO", body: "REVE_ANNO" },
    { head: "MES", body: "REVE_MES" },
    { head: "FECHA", body: "APSA_FECHACREACION" },
    { head: "MOTIVO", body: "REVE_MOTIVO" },
    { head: "USUARIO", body: "SISU_CORREO" },
];

export const formatoDetaReversiones = {
    'APSA_NOMAPS': { name: 'APS', filtre: true },
    'REVE_ANNO': { name: 'AÑO', filtre: true },
    'REVE_MES': { name: 'MES', filtre: true },
    'APSA_FECHACREACION': { name: 'FECHA', filtre: true },
    'REVE_MOTIVO': { name: 'MOTIVO', filtre: false },
    'SISU_CORREO': { name: 'USUARIO', filtre: true },
};

export const columnsDetaAutorizacion = [
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "AÑO", body: "AUTO_ANNO" },
    { head: "MES", body: "AUTO_MES" },
    { head: "FECHA", body: "AUTO_FECCREA" },
    { head: "DESCRIPCION", body: "AUTO_DESCRIPCION" },
    { head: "USUARIO", body: "SISU_CORREO" },
];

export const formatoDetaAutorizacion = {
    'APSA_NOMAPS': { name: 'APS', filtre: true },
    'AUTO_ANNO': { name: 'AÑO', filtre: true },
    'AUTO_MES': { name: 'MES', filtre: true },
    'AUTO_FECCREA': { name: 'FECHA', filtre: true },
    'AUTO_DESCRIPCION': { name: 'DESCRIPCION', filtre: false },
    'SISU_CORREO': { name: 'USUARIO', filtre: true },
};