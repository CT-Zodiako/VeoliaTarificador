export const columsEmpreReliq = [
    { head: "AÑO", body: "INED_ANNO" },
    { head: "MES", body: "INED_MES" },
    { head: "NOMBRE EMPRESA", body: "EMPR_NOMBRE" },
    { head: "FECHA CREACION", body: "INED_FECHACREACION" },
    { head: "USUARIO", body: "USUA_USUA" },
    { head: "EMPRESA", body: "EMPR_EMPR" },
    { head: "RELI", body: "reliId" },
    { head: "INED", body: "inedId" },
    { head: "DIVISION", body: "diviDivi" },
    { head: "CBLJ", body: "inedCblj" },
    { head: "LBLJ", body: "inedLblj" },
    { head: "N", body: "inedN" },
    { head: "M3 AGUA", body: "inedM3Agua" },
    { head: "CP", body: "inedCp" },
    { head: "M2 CCJ", body: "inedM2Ccj" },
    { head: "M2 LAVJ", body: "inedM2Lavj" },
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

// {
//     inedId: '',
// 	reliId: '',
// 	diviDivi: '',
// 	inedCblj: '',
// 	inedLblj: '',
// 	inedN: '',
// 	inedM3Agua: '',
// 	inedCp: '',
// 	inedM2Ccj: '',
// 	inedM2Lavj: '',
// 	inedTij: '',
// 	inedKlpj: '',
// 	inedTmj: '',
// 	inedClavj: '',
// 	inedQrtj: '',
// 	inedQrsj: '',
// };

export const columsAdicionalReliq = [
    { head: "RELIQUIDACION", body: "reliId" },
    { head: "AÑO", body: "ceadAnno" },
    { head: "MES", body: "ceadMes" },
    { head: "CDF", body: "ceadCdf" },
    { head: "CTL", body: "ceadCtl" },
];

export const objetoAdic = {
    ceadCdf: '',
    ceadCtl: '',
};
