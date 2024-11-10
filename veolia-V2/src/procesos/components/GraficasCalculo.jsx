import { 
    GraficoQrt, GraficoQa, GraficoTafna, GraficoLbl, GraficoTrna, 
    GraficoUsuarios, GraficoTarifas, CuadriculaCosto, TablaCostos
} from "../components";
import '../styles/calculo.css';

export const GraficasCalculo = ({ 
    costo, costoJson, periodoCosto, dataQrt, dataQa, dataTafna, 
    dataLBL, dataTrna, dataUsuarios, optionUsuarios, dataTarifas
}) => {

    return(
    <>
        <div className="bodyComponent container-calculo">
            {periodoCosto &&
                <div className="panel">
                    {costo.length !== 0 ?
                        <CuadriculaCosto costoResult={costo}/> :
                        <h3>No hay datos</h3> 
                    }
                </div> 
            }
            {periodoCosto.length !== 0 ?
                (
                    <div className="panel container-tablas">
                        {costoJson &&
                            costoJson.map((item, index) => {
                                return <div key={index} style={{  width: '100%' }}>
                                            <TablaCostos data={item}/>
                                        </div>
                            })
                        }
                    </div>
                ) : (
                    <div className="panel container-graficas">
                        <div>
                            <GraficoQrt dataQrt={dataQrt}/>
                        </div>
                        <div>
                            <GraficoQa dataQa={dataQa}/>
                        </div>
                        <div>
                            <GraficoTafna dataTafna={dataTafna}/>
                        </div>
                        <div>
                            <GraficoLbl dataLBL={dataLBL}/>
                        </div>
                        <div>
                            <GraficoTrna dataTrna={dataTrna}/>
                        </div>
                        <div>
                            <GraficoUsuarios dataUsuarios={dataUsuarios} options={optionUsuarios}/>
                        </div>
                        <div>
                            <GraficoTarifas dataTarifas={dataTarifas}/>
                        </div>
                    </div>
                )
            }
        </div>
    </>
  )
}