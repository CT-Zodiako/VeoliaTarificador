import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

 export const GraficoQa = ({dataQa}) => {
    return(
    <>  
        <div className='graficos'>
            {dataQa.length === 0 ? (
                <h2>grafica Qa</h2>
            ) : (
                <Bar data={dataQa} />
            )}
        </div>
    </>
  )
};