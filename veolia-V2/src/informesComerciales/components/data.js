export const columnsTarifasPlena = [
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
    { head: "Plena", body: "TARI_PLENA" },
];

export const formatoTarifasPlena = {
    'CLAS_NOMBRE': { name: 'Clase Uso', filtre: true },
    'PARA_NOMBRE': { name: 'Tipo Tarifa', filtre: true },
    'TIPO_FACT': { name: 'Tipo Fac', filtre: true },
    'TARI_CARGOFIJO': { name: 'Cargo fijo', filtre: false },
    'TARI_TC': { name: 'Tc', filtre: false },
    'TARI_TBL': { name: 'Tbl', filtre: false },
    'TARI_TLU': { name: 'Tlu', filtre: false },
    'TARI_CVARIABLE': { name: 'C. Variable', filtre: false },
    'TARI_TRT': { name: 'Trt', filtre: false },
    'TARI_TDT': { name: 'Tdt', filtre: false },
    'TARI_TTL': { name: 'Ttl', filtre: false },
    'TARI_TA': { name: 'Ta', filtre: false },
    'TARI_PLENA': { name: 'Plena', filtre: false },
};

export const columnsTarifasSC = [
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

export const formatoTarifasSC = {
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

export const columnsFacturacion = [
    { head: "Clase Uso", body: "CLAS_NOMBRE" },
    { head: "Tipo Tarifa", body: "PARA_NOMBRE" },
    { head: "Tipo Fac", body: "TIPO_FACT" },
    { head: "Factor P.", body: "FAPR_NOMBRE" },
    { head: "Vlr Factor.", body: "FAPR_VALOR" },
    { head: "Sub & Con", body: "TARI_SUBCONT" },
    { head: "TC", body: "TARI_TC" },
    { head: "TBL", body: "TARI_TBL" },
    { head: "TLU", body: "TARI_TLU" },
    { head: "TRT", body: "TARI_TRT" },
    { head: "TDF", body: "TARI_TDF" },
    { head: "TTL", body: "TARI_TTL" },
    { head: "TA", body: "TARI_TA" },
    { head: "T. Plena", body: "TARIFAPLENA" },
    { head: "TC SC", body: "TARI_TCSC" },
    { head: "TBL SC", body: "TARI_TBLSC" },
    { head: "TLU SC", body: "TARI_TLUSC" },
    { head: "TRT SC", body: "TARI_TRTSC" },
    { head: "TDF SC", body: "TARI_TDFSC" },
    { head: "TTL SC", body: "TARI_TTLSC" },
    { head: "TA SC", body: "TARI_TASC" },
    { head: "Tar. S&C", body: "TARIFASYC" },
    { head: "TRNA", body: "TARI_TRNA" },
    { head: "TAFNA", body: "TARI_TAFNA" },
    { head: "TAFA", body: "TARI_TAFA" },
    { head: "TRA", body: "TARI_TRA" },
    { head: "TRBL", body: "TARI_TRBL" },
    { head: "TRLU", body: "TARI_TRLU" },
    { head: "TRRA", body: "TARI_TRRA" },
    { head: "CRT", body: "TARI_CRT" },
    { head: "CFT", body: "TARI_CDF" },
    { head: "CTL", body: "TARI_CTL" },
    { head: "VBA", body: "TARI_VBA" },
    { head: "CP", body: "TARI_CP" },
    { head: "CLAV", body: "TARI_CLAV" },
    { head: "CLP", body: "TARI_CLP" }
  ];

  export const formatoFacturacion = {
    'CLAS_NOMBRE': { name: 'Clase Uso', filtre: true },
    'PARA_NOMBRE': { name: 'Tipo Tarifa', filtre: true },
    'TIPO_FACT': { name: 'Tipo Fac', filtre: true },
    'FAPR_NOMBRE': { name: 'Factor P.', filtre: true },
    'FAPR_VALOR': { name: 'Vlr Factor.', filtre: false },
    'TARI_SUBCONT': { name: 'Sub & Con', filtre: false },
    'TARI_TC': { name: 'TC', filtre: false },
    'TARI_TBL': { name: 'TBL', filtre: false },
    'TARI_TLU': { name: 'TLU', filtre: false },
    'TARI_TRT': { name: 'TRT', filtre: false },
    'TARI_TDF': { name: 'TDF', filtre: false },
    'TARI_TTL': { name: 'TTL', filtre: false },
    'TARI_TA': { name: 'TA', filtre: false },
    'TARIFAPLENA': { name: 'T. Plena', filtre: false },
    'TARI_TCSC': { name: 'TC SC', filtre: false },
    'TARI_TBLSC': { name: 'TBL SC', filtre: false },
    'TARI_TLUSC': { name: 'TLU SC', filtre: false },
    'TARI_TRTSC': { name: 'TRT SC', filtre: false },
    'TARI_TDFSC': { name: 'TDF SC', filtre: false },
    'TARI_TTLSC': { name: 'TTL SC', filtre: false },
    'TARI_TASC': { name: 'TA SC', filtre: false },
    'TARIFASYC': { name: 'Tar. S&C', filtre: false },
    'TARI_TRNA': { name: 'TRNA', filtre: false },
    'TARI_TAFNA': { name: 'TAFNA', filtre: false },
    'TARI_TAFA': { name: 'TAFA', filtre: false },
    'TARI_TRA': { name: 'TRA', filtre: false },
    'TARI_TRBL': { name: 'TRBL', filtre: false },
    'TARI_TRLU': { name: 'TRLU', filtre: false },
    'TARI_TRRA': { name: 'TRRA', filtre: false },
    'TARI_CRT': { name: 'CRT', filtre: false },
    'TARI_CDF': { name: 'CFT', filtre: false },
    'TARI_CTL': { name: 'CTL', filtre: false },
    'TARI_VBA': { name: 'VBA', filtre: false },
    'TARI_CP': { name: 'CP', filtre: false },
    'TARI_CLAV': { name: 'CLAV', filtre: false },
    'TARI_CLP': { name: 'CLP', filtre: false },
};

export const columnsDetFac = [
    { head: "Tipo Tarifa", body: "PARA_NOMBRE" },
    { head: "Tarifa", body: "RETA_VARIABLE" },
    { head: "Valor Mes", body: "RETA_VALORMES" },
    { head: "Promedio", body: "RETA_VALORPROM" },
];

export const formatoDetFac = {
    'PARA_NOMBRE': { name: 'Tipo Tarifa', filtre: true },
    'RETA_VARIABLE': { name: 'Tarifa', filtre: false },
    'RETA_VALORMES': { name: 'Valor Mes', filtre: false },
    'RETA_VALORPROM': { name: 'Promedio', filtre: false },
};

export const columnsDetFacClus = [
    { head: "Clase Uso", body: "CLAS_NOMBRE" },
    { head: "Tipo Tarifa", body: "PARA_NOMBRE" },
    { head: "Tipo Fac", body: "FACTURA" },
    { head: "Factor P.", body: "FAPR_NOMBRE" },
    { head: "Vlr Factor.", body: "FAPR_VALOR" },
    { head: "Sub & Con", body: "TARI_SUBCONT" },
    { head: "TC", body: "TARI_TC" },
    { head: "TBL", body: "TARI_TBL" },
    { head: "TCP", body: "TCP" },
    { head: "TCCC", body: "TCCC" },
    { head: "TCLAV", body: "TCLAV" },
    { head: "TCLP", body: "TCLP" },
    { head: "TCCEI", body: "TCCEI" },
    { head: "TCCEM", body: "TCCEM" },
    { head: "TRT", body: "TARI_TRT" },
    { head: "TDF", body: "TARI_TDF" },
    { head: "TTL", body: "TARI_TTL" },
    { head: "TA", body: "TARI_TA" },
    { head: "T. Plena", body: "TARIFAPLENA" },
    { head: "TC SC", body: "TARI_TCSC" },
    { head: "TBL SC", body: "TARI_TBLSC" },
    { head: "TCP SC", body: "TCPSC" },
    { head: "TCCC SC", body: "TCCCSC" },
    { head: "TCLAV SC", body: "TCLAVSC" },
    { head: "TCLP SC", body: "TCLPSC" },
    { head: "TCCEI SC", body: "TCCEISC" },
    { head: "TCCEM SC", body: "TCCEMSC" },
    { head: "TRT SC", body: "TARI_TRTSC" },
    { head: "TDF SC", body: "TARI_TDFSC" },
    { head: "TTL SC", body: "TARI_TTLSC" },
    { head: "TA SC", body: "TARI_TASC" },
    { head: "Tar. S&C", body: "TARIFASYC" },
    { head: "TRNA", body: "TARI_TRNA" },
    { head: "TAFNA", body: "TARI_TAFNA" },
    { head: "TAFA", body: "TARI_TAFA" },
    { head: "TRA", body: "TARI_TRA" },
    { head: "TRBL", body: "TARI_TRBL" },
    { head: "TRLU", body: "TARI_TRLU" },
    { head: "TRRA", body: "TARI_TRRA" },
    { head: "CRT", body: "TARI_CRT" },
    { head: "CFT", body: "TARI_CDF" },
    { head: "CTL", body: "TARI_CTL" },
    { head: "VBA", body: "TARI_VBA" },
];

export const formatoDetFacClus = {
    'CLAS_NOMBRE': { name: 'Clase Uso', filtre: true },
    'PARA_NOMBRE': { name: 'Tipo Tarifa', filtre: true },
    'FACTURA': { name: 'Tipo Fac', filtre: true },
    'FAPR_NOMBRE': { name: 'Factor P.', filtre: true },
    'FAPR_VALOR': { name: 'Vlr Factor.', filtre: false },
    'TARI_SUBCONT': { name: 'Sub & Con', filtre: false },
    'TARI_TC': { name: 'TC', filtre: false },
    'TARI_TBL': { name: 'TBL', filtre: false },
    'TCP': { name: 'TCP', filtre: false },
    'TCCC': { name: 'TCCC', filtre: false },
    'TCLAV': { name: 'TCLAV', filtre: false },
    'TCLP': { name: 'TCLP', filtre: false },
    'TCCEI': { name: 'TCCEI', filtre: false },
    'TCCEM': { name: 'TCCEM', filtre: false },
    'TARI_TRT': { name: 'TRT', filtre: false },
    'TARI_TDF': { name: 'TDF', filtre: false },
    'TARI_TTL': { name: 'TTL', filtre: false },
    'TARI_TA': { name: 'TA', filtre: false },
    'TARIFAPLENA': { name: 'T. Plena', filtre: false },
    'TARI_TCSC': { name: 'TC SC', filtre: false },
    'TARI_TBLSC': { name: 'TBL SC', filtre: false },
    'TCPSC': { name: 'TCP SC', filtre: false },
    'TCCCSC': { name: 'TCCC SC', filtre: false },
    'TCLAVSC': { name: 'TCLAV SC', filtre: false },
    'TCLPSC': { name: 'TCLP SC', filtre: false },
    'TCCEISC': { name: 'TCCEI SC', filtre: false }, 
    'TCCEMSC': { name: 'TCCEM SC', filtre: false },
    'TARI_TRTSC': { name: 'TRT SC', filtre: false },
    'TARI_TDFSC': { name: 'TDF SC', filtre: false },
    'TARI_TTLSC': { name: 'TTL SC', filtre: false },
    'TARI_TASC': { name: 'TA SC', filtre: false },
    'TARIFASYC': { name: 'Tar. S&C', filtre: false },
    'TARI_TRNA': { name: 'TRNA', filtre: false },
    'TARI_TAFNA': { name: 'TAFNA', filtre: false },
    'TARI_TAFA': { name: 'TAFA', filtre: false },
    'TARI_TRA': { name: 'TRA', filtre: false },
    'TARI_TRBL': { name: 'TRBL', filtre: false },
    'TARI_TRLU': { name: 'TRLU', filtre: false },
    'TARI_TRRA': { name: 'TRRA', filtre: false },
    'TARI_CRT': { name: 'CRT', filtre: false },
    'TARI_CDF': { name: 'CFT', filtre: false },
    'TARI_CTL': { name: 'CTL', filtre: false },
    'TARI_VBA': { name: 'VBA', filtre: false },
};

export const columnsDetFacDINC = [
    { head: "Clase Uso", body: "CLAS_NOMBRE" },
    { head: "Tipo Tarifa", body: "PARA_NOMBRE" },
    { head: "Tipo Fac", body: "TIPO_FACT" },
    { head: "Factor P.", body: "FAPR_NOMBRE" },
    { head: "Vlr Factor.", body: "FAPR_VALOR" },
    { head: "Sub & Con", body: "TARI_SUBCONT" },
    { head: "SDINC", body: "DINC" },
    { head: "TC", body: "TARI_TC" },
    { head: "TBL", body: "TARI_TBL" },
    { head: "TLU", body: "TARI_TLU" },
    { head: "TRT", body: "TARI_TRT" },
    { head: "TDF", body: "TARI_TDF" },
    { head: "TTL", body: "TARI_TTL" },
    { head: "TA", body: "TARI_TA" },
    { head: "T. Plena", body: "TARIFAPLENA" },
    { head: "TC SC", body: "TARI_TCSC" },
    { head: "TBL SC", body: "TARI_TBLSC" },
    { head: "TLU SC", body: "TARI_TLUSC" },
    { head: "TRT SC", body: "TARI_TRTSC" },
    { head: "TDF SC", body: "TARI_TDFSC" },
    { head: "TTL SC", body: "TARI_TTLSC" },
    { head: "TA SC", body: "TARI_TASC" },
    { head: "Tar. S&C", body: "TARIFASYC" },
    { head: "TRNA", body: "TARI_TRNA" },
    { head: "TAFNA", body: "TARI_TAFNA" },
    { head: "TAFA", body: "TARI_TAFA" },
    { head: "TRA", body: "TARI_TRA" },
    { head: "TRBL", body: "TARI_TRBL" },
    { head: "TRLU", body: "TARI_TRLU" },
    { head: "TRRA", body: "TARI_TRRA" },
    { head: "CRT", body: "TARI_CRT" },
    { head: "CFT", body: "TARI_CDF" },
    { head: "CTL", body: "TARI_CTL" },
    { head: "VBA", body: "TARI_VBA" },
    { head: "CP", body: "TARI_CP" },
    { head: "CCC", body: "TARI_CCC" },
    { head: "CLAV", body: "TARI_CLAV" },
    { head: "CLP", body: "TARI_CLP" },
    { head: "CCEI", body: "TARI_CCEI" },
    { head: "CCEM", body: "TARI_CCEM" },
];

export const formatoDetFacDINC = {
    'CLAS_NOMBRE': { name: 'Clase Uso', filtre: true },
    'PARA_NOMBRE': { name: 'Tipo Tarifa', filtre: true },
    'TIPO_FACT': { name: 'Tipo Fac', filtre: true },
    'FAPR_NOMBRE': { name: 'Factor P.', filtre: true },
    'FAPR_VALOR': { name: 'Vlr Factor.', filtre: false },
    'TARI_SUBCONT': { name: 'Sub & Con', filtre: false },
    'DINC': { name: 'SDINC', filtre: false },
    'TARI_TC': { name: 'TC', filtre: false },
    'TARI_TBL': { name: 'TBL', filtre: false },
    'TARI_TLU': { name: 'TLU', filtre: false },
    'TARI_TRT': { name: 'TRT', filtre: false },
    'TARI_TDF': { name: 'TDF', filtre: false },
    'TARI_TTL': { name: 'TTL', filtre: false },
    'TARI_TA': { name: 'TA', filtre: false },
    'TARIFAPLENA': { name: 'T. Plena', filtre: false },
    'TARI_TCSC': { name: 'TC SC', filtre: false },
    'TARI_TBLSC': { name: 'TBL SC', filtre: false },
    'TARI_TLUSC': { name: 'TLU SC', filtre: false },
    'TARI_TRTSC': { name: 'TRT SC', filtre: false },
    'TARI_TDFSC': { name: 'TDF SC', filtre: false },
    'TARI_TTLSC': { name: 'TTL SC', filtre: false },
    'TARI_TASC': { name: 'TA SC', filtre: false },
    'TARIFASYC': { name: 'Tar. S&C', filtre: false },
    'TARI_TRNA': { name: 'TRNA', filtre: false },
    'TARI_TAFNA': { name: 'TAFNA', filtre: false },
    'TARI_TAFA': { name: 'TAFA', filtre: false },   
    'TARI_TRA': { name: 'TRA', filtre: false }, 
    'TARI_TRBL': { name: 'TRBL', filtre: false },
    'TARI_TRLU': { name: 'TRLU', filtre: false },
    'TARI_TRRA': { name: 'TRRA', filtre: false },
    'TARI_CRT': { name: 'CRT', filtre: false },
    'TARI_CDF': { name: 'CFT', filtre: false },
    'TARI_CTL': { name: 'CTL', filtre: false },
    'TARI_VBA': { name: 'VBA', filtre: false },
    'TARI_CP': { name: 'CP', filtre: false },
    'TARI_CCC': { name: 'CCC', filtre: false },
    'TARI_CLAV': { name: 'CLAV', filtre: false },
    'TARI_CLP': { name: 'CLP', filtre: false },
    'TARI_CCEI': { name: 'CCEI', filtre: false },
    'TARI_CCEM': { name: 'CCEM', filtre: false },
};



