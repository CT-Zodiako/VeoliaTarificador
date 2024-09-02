import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export const GraficoTrna = ({dataTrna}) => {
    return(
    <>
        <div className='graficos'>
            {dataTrna.length === 0 ? (
                <h2>grafica Trna</h2>
            ) : (
                <Line data={dataTrna} />
            )}
        </div>
    </>
  )
};