import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

 export const GraficoTarifas = ({dataTarifas}) => {
    return(
    <>
        <div className='graficos'>
            <div className="tituloCosto">
                <Link to="/tarifas"> TARIFAS</Link>
            </div>
            {dataTarifas.length === 0 ? (
                <h2>grafica Tarifas</h2>
            ) : (
                <div className='grafica-pastel'>
                    <PolarArea data={dataTarifas} />
                </div>
            )}
        </div>
    </>
  )
};