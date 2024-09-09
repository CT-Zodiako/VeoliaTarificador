export const columnsCrear = [
    { head: "Id Proy", body: "PROYID" },
    { head: "Aps", body: "APSA_NOMAPS" },
    { head: "Nombre", body: "PROYNOMBRE" },
    { head: "Descripción", body: "PROYDESCRIPCION" },
    { head: "Tipo Proy", body: "PARA_NOMBRE" },
    { head: "Desde", body: "DESDE" },
    { head: "Horizonte Hasta", body: "HASTA" },
    { head: "Usuario", body: "SISU_CORREO" },
];

export const formatoCrear = {
    'PROYID': { name: 'Id Proy', filtre: true },
    'APSA_NOMAPS': { name: 'Aps', filtre: true },
    'PROYNOMBRE': { name: 'Nombre', filtre: false },
    'PROYDESCRIPCION': { name: 'Descripción', filtre: false },
    'PARA_NOMBRE': { name: 'Tipo Proy', filtre: true },
    'DESDE': { name: 'Desde', filtre: false },
    'HASTA': { name: 'Horizonte Hasta', filtre: false },
    'SISU_CORREO': { name: 'Usuario', filtre: true },
};

export const columnsSubContri = [
    { head: "clase de uso", body: "CLAS_CLASE" },
    { head: "valor", body: "SUCO_VALOR" },
];
