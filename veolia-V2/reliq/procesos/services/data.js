export const columsEmpreReliq = [
    { head: "AÑO", body: "INED_ANNO" },
    { head: "MES", body: "INED_MES" },
    { head: "EMPRESA", body: "EMPR_EMPR" },
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
    { head: "ID IARE", body: "iareId" },
    { head: "ID RELI", body: "reliId" },
    { head: "ID APSA", body: "apsaId" },
    { head: "ID RELL", body: "rellId" },
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
    { head: "FECHA CREACIÓN", body: "iareFechaCreacion" },
    { head: "USUARIO", body: "usuaUsua" },
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