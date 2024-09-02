import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

 export const GraficoUsuarios = ({dataUsuarios, options}) => {
    return(
    <>  
        <div className='graficos'>
            {dataUsuarios.length === 0 ? (
                <h2>grafica Usuarios</h2>
            ) : (
                <Bar data={dataUsuarios} options={options}/>
            )}
        </div>
    </>
  )
};