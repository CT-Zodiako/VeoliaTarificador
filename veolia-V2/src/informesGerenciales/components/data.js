export const columnsAPSA = [
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "CLASE USO", body: "CLAS_NOMBRE" },
    { head: "TIPO PREDIO", body: "PARA_NOMBRE" },
    { head: "VALOR", body: "SUCO_VALOR" },
];

export const formato = {
    'APSA_NOMAPS': {name: 'APS', filtre: true},
    'CLAS_NOMBRE': {name: 'CLASE', filtre: true},
    'SUCO_VALOR': {name: 'VALOR', filtre: true},
    'PARA_NOMBRE': {name: 'TIPO PREDIO', filtre: false}
}

export const columnsAPSACosto = [
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "COSTO", body: "NOMCOSTO" },
    { head: "VALOR A COBRAR", body: "ACOBRAR" },
    { head: "VALOR REAL", body: "VALOR" },
    { head: "VARIACION", body: "VARIACION" },
];

export const formatoCosto = {
    'APSA_NOMAPS': {name: 'APS', filtre: true},
    'NOMCOSTO': {name: 'COSTO', filtre: false},
    'ACOBRAR': {name: 'VALOR A COBRAR', filtre: false},
    'VALOR': {name: 'VALOR REAL', filtre: false},
    'VARIACION': {name: 'VARIACION', filtre: false},
}
