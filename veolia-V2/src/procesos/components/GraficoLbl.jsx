import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

 export const GraficoLbl = ({dataLBL}) => {
    const option = {
        indexAxis: 'y', 
    }

    return(
    <>
        <div className='graficos'>
            {dataLBL.length === 0 ? (
                <h2>grafica LBL</h2>
            ) : (
                <Bar data={dataLBL} options={option}/>
            )}
        </div>
    </>
  )
};