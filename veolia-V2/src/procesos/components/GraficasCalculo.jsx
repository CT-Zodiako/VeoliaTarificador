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
                <div className="panel width-Component">
                    {costo.length !== 0 ?
                        <CuadriculaCosto costoResult={costo}/> :
                        <h3>No hay datos</h3> 
                    }
                </div> 
            }
            {periodoCosto.length !== 0 ?
                (
                    <div className="panel container-tablas width-Component">
                        {costoJson &&
                            costoJson.map((item, index) => {
                                return <div key={index} style={{ width: '100%' }}>
                                            <TablaCostos data={item}/>
                                        </div>
                            })
                        }
                    </div>
                ) : (
                    <div className="panel container-graficas width-Component">
                            <GraficoQrt dataQrt={dataQrt}/>
                            <GraficoQa dataQa={dataQa}/>
                            <GraficoTafna dataTafna={dataTafna}/>
                            <GraficoLbl dataLBL={dataLBL}/>
                            <GraficoTrna dataTrna={dataTrna}/>
                            <GraficoUsuarios dataUsuarios={dataUsuarios} options={optionUsuarios}/>
                            <GraficoTarifas dataTarifas={dataTarifas}/>
                    </div>
                )
            }
        </div>
    </>
  )
}