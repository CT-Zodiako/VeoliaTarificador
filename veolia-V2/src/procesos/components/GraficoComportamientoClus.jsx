import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export const GraficoComportamientoClus = ({dataCompClus}) => {
    return(
    <>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            {dataCompClus.length === 0 ? (
                <h2>grafica Comportamiento Clus</h2>
            ) : (
                <Line data={dataCompClus} style={{ width: '90%' }}/>
            )}
        </div>
    </>
  )
};