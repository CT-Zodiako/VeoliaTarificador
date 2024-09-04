import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export const GraficoComportamientoClus = ({dataCompClus}) => {
    return(
    <>
        <div style={
            { 
                width: '100%',
                height: '100%',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
        }}>
            {dataCompClus.length === 0 ? (
                <h2>grafica Comportamiento Clus</h2>
            ) : (
                <Line data={dataCompClus} style={{ width: '90%' }}/>
            )}
        </div>
    </>
  )
};