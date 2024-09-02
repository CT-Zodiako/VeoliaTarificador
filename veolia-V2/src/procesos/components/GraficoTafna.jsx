import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

 export const GraficoTafna = ({dataTafna}) => {
    return(
    <>
        <div className='graficos'>
            {dataTafna.length === 0 ? (
                <h2>grafica Tafna</h2>
            ) : (
                <Bar data={dataTafna} />
            )}
        </div>
    </>
  )
};