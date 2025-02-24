export const columsEmpreReliq = [
    { head: "AÑO", body: "INED_ANNO" },
    { head: "MES", body: "INED_MES" },
    { head: "EMPRESA", body: "EMPR_NOMBRE" },
    { head: "CBLJ", body: "inedCblj" },
    { head: "LBLJ", body: "inedLblj" },
    { head: "N", body: "inedN" },
    { head: "M3AGUA", body: "inedM3Agua" },
    { head: "CP", body: "inedCp" },
    { head: "M2CCJ", body: "inedM2Ccj" },
    { head: "M2LAVJ", body: "inedM2Lavj" },
    { head: "TIJ", body: "inedTij" },
    { head: "KLPJ", body: "inedKlpj" },
    { head: "TMJ", body: "inedTmj" },
    { head: "CLAVJ", body: "inedClavj" },
    { head: "QRTJ", body: "inedQrtj" },
    { head: "QRSJ", body: "inedQrsj" },
];

export const objetoEmpr = {
    info: [
        "inedId", "reliId", "diviDivi", "inedCblj", "inedLblj", 
        "inedN", "inedM3Agua", "inedCp", "inedM2Ccj", "inedM2Lavj", 
        "inedTij", "inedKlpj", "inedTmj", "inedClavj", "inedQrtj", 
        "inedQrsj"
    ],
    editar: [
        "diviDivi", "inedCblj", "inedLblj", "inedN", "inedM3Agua", 
        "inedCp", "inedM2Ccj", "inedM2Lavj", "inedTij", "inedKlpj", 
        "inedTmj", "inedClavj", "inedQrtj", "inedQrsj" 
    ]
};

export const keyTranformEmpre = {
    "INED_ID": "inedId",
    "RELI_ID": "reliId",
    "DIVI_DIVI": "diviDivi",
    "INED_CBLJ": "inedCblj",
    "INED_LBLJ": "inedLblj",
    "INED_N": "inedN",
    "INED_M3AGUA": "inedM3Agua",
    "INED_CP": "inedCp",
    "INED_M2CCJ": "inedM2Ccj",
    "INED_M2LAVJ": "inedM2Lavj",
    "INED_TIJ": "inedTij",
    "INED_KLPJ": "inedKlpj",
    "INED_TMJ": "inedTmj",
    "INED_CLAVJ": "inedClavj",
    "INED_QRTJ": "inedQrtj",
    "INED_QRSJ": "inedQrsj",
};

export const columsAdicionalReliq = [
    { head: "AÑO", body: "ceadAnno" },
    { head: "MES", body: "ceadMes" },
    { head: "RELIQUIDACION", body: "reliId" },
    { head: "CDF", body: "ceadCdf" },
    { head: "CTL", body: "ceadCtl" },
];

export const objetoAdic = {
    info: ["ceadId", "reliId", "ceadCdf", "ceadCtl"],
    editar: ["ceadCdf", "ceadCtl"],
};

export const columsUsuarioReliq = [
    { head: "AÑO", body: "iuaeAnno" },
    { head: "MES", body: "iuaeMes" },
    { head: "CLASE USO", body: "clasClaseUso" },
    { head: "DIVISION", body: "diviDivi" },
    { head: "TIPO TARIFA", body: "paraTipTar20012" },
    { head: "CANTIDAD", body: "iuaeCantidad" },
    { head: "TONELADAS", body: "iuaeToneladas" },
    { head: "CÓDIGO FAPR", body: "faprCodigo" },
    { head: "UBICACIÓN", body: "paraUbicacion20016" },
    { head: "TIPO FACTURACIÓN", body: "paraTipFac20014" },
];

export const objetoUsua = {
    info: [
        "iuaeId", "reliId", "clasClaseUso", "diviDivi", "paraTipTar20012", 
        "iuaeCantidad", "iuaeToneladas", "faprCodigo", "paraUbicacion20016", 
        "paraTipFac20014"
    ],
    editar: [
        "clasClaseUso", "diviDivi", "paraTipTar20012", "iuaeCantidad", 
        "iuaeToneladas", "faprCodigo", "paraUbicacion20016", "paraTipFac20014"
    ],
};

export const columsRellenosReliq = [
    { head: "AÑO", body: "iareAnno" },
    { head: "MES", body: "iareMes" },
    { head: "QRS", body: "iareQrs" },
    { head: "CDFK", body: "iareCdfk" },
    { head: "VACDFABC", body: "iareVacdfabc" },
    { head: "VACDF", body: "iareVacdf" },
    { head: "VL", body: "iareVl" },
    { head: "CTMLX", body: "iareCtmlx" },
    { head: "CTLK", body: "iareCtlk" },
    { head: "VACTLABC", body: "iareVactlabc" },
    { head: "VACTL", body: "iareVactl" },
    { head: "ESCENARIO", body: "iareEscenario" },
    { head: "C", body: "iareC" },
];

export const objetoRelleno = {
    info: [
        "iareId", "reliId", "iareQrs", "iareCdfk", "iareVacdfabc", "iareVacdf", 
        "iareVl", "iareCtmlx", "iareCtlk", "iareVactlabc", "iareVactl", 
        "iareEscenario", "iareC"
    ],
    editar: [
        "iareQrs", "iareCdfk", "iareVacdfabc", "iareVacdf", "iareVl", "iareCtmlx", 
        "iareCtlk", "iareVactlabc", "iareVactl", "iareEscenario", "iareC"
    ],
};

export const columsApsReliq = [
    { head: "AÑO", body: "IAED_ANNO" },
    { head: "MES", body: "IAED_MES" },
    { head: "EMPRESA", body: "EMPR_NOMBRE" },
    { head: "QRTZ", body: "iaedQrtz" },
    { head: "CPE", body: "iaedCpe" },
    { head: "T", body: "iaedT" },
    { head: "VACRTABC", body: "iaedVacrtabc" },
    { head: "VACRT", body: "iaedVacrt" },
    { head: "CRTZ", body: "iaedCrtz" },
    { head: "QBL", body: "iaedQbl" },
    { head: "QLU", body: "iaedQlu" },
    { head: "QR", body: "iaedQr" },
    { head: "TAFA", body: "iaedTafa" },
    { head: "ND", body: "iaedNd" },
    { head: "NA", body: "iaedNa" },
    { head: "QNA", body: "iaedQna" },
    { head: "TAFNA", body: "iaedTafna" },
    { head: "QA", body: "iaedQa" },
    { head: "APROVECHA", body: "iaedAprovecha" },
    { head: "CRTCOMP", body: "iaedCrtcomp" },
    { head: "CDFCOMP", body: "iaedCdfcomp" },
    { head: "QRSCOMP", body: "iaedQrscomp" },
    { head: "QALMACEN", body: "iaedQalmacen" },
    { head: "CPEET", body: "iaedCpeet" },
    { head: "QRTET", body: "iaedQrtet" },
    { head: "NAA", body: "iaedNaa" },
    { head: "NDA", body: "iaedNda" },
    { head: "DIVISIÓN", body: "diviDivi" },

];

export const objetoAps = {
    info: [ "iaedId", "reliId", "diviDivi", "iaedQrtz", "iaedCpe",  "iaedT",
        "iaedVacrtabc", "iaedVacrt", "iaedCrtz", "iaedQbl", "iaedQlu",
        "iaedQr", "iaedTafa", "iaedNd", "iaedNa", "iaedQna", "iaedTafna",
        "iaedQa", "iaedAprovecha", "iaedQalmacen", "iaedCpeet", "iaedQrtet",
        "iaedCrtcomp", "iaedCdfcomp", "iaedQrscomp", "iaedNaa", "iaedNda"
    ],
    editar: [ "diviDivi", "iaedQrtz", "iaedCpe", "iaedT", "iaedVacrtabc", "iaedVacrt",
        "iaedCrtz", "iaedQbl", "iaedQlu", "iaedQr", "iaedTafa", "iaedNd",
        "iaedNa", "iaedQna", "iaedTafna", "iaedQa", "iaedAprovecha", "iaedQalmacen",
        "iaedCpeet", "iaedQrtet", "iaedCrtcomp", "iaedCdfcomp", "iaedQrscomp",
        "iaedNaa", "iaedNda"],
    
};

export const keyTranformAps = {
    "IAED_ID": "iaedId",
    "RELI_ID": "reliId",
    "DIVI_DIVI": "diviDivi",
    "IAED_QRTZ": "iaedQrtz",
    "IAED_CPE": "iaedCpe",
    "IAED_T": "iaedT",
    "IAED_VACRTABC": "iaedVacrtabc",
    "IAED_VACRT": "iaedVacrt",
    "IAED_CRTZ": "iaedCrtz",
    "IAED_QBL": "iaedQbl",
    "IAED_QLU": "iaedQlu",
    "IAED_QR": "iaedQr",
    "IAED_TAFA": "iaedTafa",
    "IAED_ND": "iaedNd",
    "IAED_NA": "iaedNa",
    "IAED_QNA": "iaedQna",
    "IAED_TAFNA": "iaedTafna",
    "IAED_QA": "iaedQa",
    "IAED_APROVECHA": "iaedAprovecha",
    "IAED_QALMACEN": "iaedQalmacen",
    "IAED_CPEET": "iaedCpeet",
    "IAED_QRTET": "iaedQrtet",
    "IAED_CRTCOMP": "iaedCrtcomp",
    "IAED_CDFCOMP": "iaedCdfcomp",
    "IAED_QRSCOMP": "iaedQrscomp",
    "IAED_NAA": "iaedNaa",
    "IAED_NDA": "iaedNda"
};