import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

 export const GraficoTarifas = ({dataTarifas}) => {
    return(
    <>
        <div className='graficos'>
            {dataTarifas.length === 0 ? (
                <h2>grafica Tarifas</h2>
            ) : (
                <PolarArea data={dataTarifas}/>
            )}
        </div>
    </>
  )
};