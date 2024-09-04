import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend); 

export const GraficoClus = ({ dataClus }) => {
    return (
        <div style={{ height: '24rem', width: '24rem' }}>
            {dataClus.length === 0 ? (
                <h2>grafica Qrt</h2>
            ) : (
                <Doughnut data={dataClus} style={{ width: '100%' }}/>
            )}
        </div>
    );
};


