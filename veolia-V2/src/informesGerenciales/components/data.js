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

export const columnsTarifasPlena = [
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "Clase Uso", body: "CLAS_NOMBRE" },
    { head: "Tipo Tarifa", body: "PARA_NOMBRE" },
    { head: "Tipo Fac", body: "TIPO_FACT" },
    { head: "Cargo fijo", body: "TARI_CARGOFIJO" },
    { head: "Tc", body: "TARI_TC" },
    { head: "Tbl", body: "TARI_TBL" },
    { head: "Tlu", body: "TARI_TLU" },
    { head: "C. Variable", body: "TARI_CVARIABLE" },
    { head: "Trt", body: "TARI_TRT" },
    { head: "Tdt", body: "TARI_TDT" },
    { head: "Ttl", body: "TARI_TTL" },
    { head: "Ta", body: "TARI_TA" },
    { head: "Plena", body: "TARI_PLENA" }
];

export const formatoTarifasPlena = {
    'APSA_NOMAPS': { name: 'APS', filtre: true },
    'CLAS_NOMBRE': { name: 'CLASE USO', filtre: true },
    'PARA_NOMBRE': { name: 'TIPO PREDIO', filtre: true },
    'TIPO_FACT': { name: 'TIPO FACT', filtre: false },
    'TARI_CARGOFIJO': { name: 'CARGO FIJO', filtre: false },
    'TARI_TC': { name: 'TC', filtre: false },
    'TARI_TBL': { name: 'TBL', filtre: false },
    'TARI_TLU': { name: 'TLU', filtre: false },
    'TARI_CVARIABLE': { name: 'C. VARIABLE', filtre: false },
    'TARI_TRT': { name: 'TRT', filtre: false },
    'TARI_TDT': { name: 'TDT', filtre: false },
    'TARI_TTL': { name: 'TTL', filtre: false },
    'TARI_TA': { name: 'TA', filtre: false },
    'TARI_PLENA': { name: 'PLENA', filtre: false }
};

export const columnsTarifaSubCon = [
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "Clase Uso", body: "CLAS_NOMBRE" },
    { head: "Tipo Tarifa", body: "PARA_NOMBRE" },
    { head: "Tipo Fac", body: "TIPO_FACT" },
    { head: "Cargo fijo", body: "TARI_CARGOFIJOSC" },
    { head: "Tc", body: "TARI_TCSC" },
    { head: "Tbl", body: "TARI_TBLSC" },
    { head: "Tlu", body: "TARI_TLUSC" },
    { head: "C. Variable", body: "TARI_CVARIABLESC" },
    { head: "Trt", body: "TARI_TRTSC" },
    { head: "Tdt", body: "TARI_TDTSC" },
    { head: "Ttl", body: "TARI_TTLSC" },
    { head: "Ta", body: "TARI_TASC" },
    { head: "S/C", body: "TARI_SUBCON" },
];


export const formatoATarifaSubCon = {
    'APSA_NOMAPS': { name: 'APS', filtre: true },
    'CLAS_NOMBRE': { name: 'Clase Uso', filtre: true },
    'PARA_NOMBRE': { name: 'Tipo Tarifa', filtre: true },
    'TIPO_FACT': { name: 'Tipo Fac', filtre: true },
    'TARI_CARGOFIJOSC': { name: 'Cargo fijo', filtre: false },
    'TARI_TCSC': { name: 'Tc', filtre: false },
    'TARI_TBLSC': { name: 'Tbl', filtre: false },
    'TARI_TLUSC': { name: 'Tlu', filtre: false },
    'TARI_CVARIABLESC': { name: 'C. Variable', filtre: false },
    'TARI_TRTSC': { name: 'Trt', filtre: false },
    'TARI_TDTSC': { name: 'Tdt', filtre: false },
    'TARI_TTLSC': { name: 'Ttl', filtre: false },
    'TARI_TASC': { name: 'Ta', filtre: false },
    'TARI_SUBCON': { name: 'S/C', filtre: false },
};

export const columnsCostoPodaInfo = [
    { head: "PERIODO", body: "PERIODO" },
    { head: "EMPRESA", body: "EMPR_NOMBRE" },
    { head: "COSTO TECHO", body: "CPTE_VALORSUI" },
    { head: "COSTO FACTURACION", body: "CPTE_VALORFACT" },
    { head: "TIPO INGRESO", body: "TIPOINGRESO" },
    { head: "FECHA CREACION", body: "CPTE_FECCREA" },
    { head: "USUARIO", body: "SISU_CORREO" },
];

export const formatoCostoPodaInfo = {
    'PERIODO': { name: 'PERIODO', filtre: true },
    'EMPR_NOMBRE': { name: 'EMPRESA', filtre: true },
    'CPTE_VALORSUI': { name: 'COSTO TECHO', filtre: false },
    'CPTE_VALORFACT': { name: 'COSTO FACTURACION', filtre: false },
    'TIPOINGRESO': { name: 'TIPO INGRESO', filtre: true },
    'CPTE_FECCREA': { name: 'FECHA CREACION', filtre: false },
    'SISU_CORREO': { name: 'USUARIO', filtre: false },
};


export const columnsdashBoard = [
    { head: "Id", body: "APSA_ID" },
    { head: "APS", body: "APSA_NOMAPS" },
    { head: "Estado calculo", body: "TARI_FECHACREACION" },
    { head: "Usuario", body: "SISU_CORREO" },
];