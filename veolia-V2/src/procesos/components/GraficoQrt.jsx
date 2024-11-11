import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const GraficoQrt = ({dataQrt}) => {
    return (
        <div className="graficos">
            <div className="tituloCosto">
                QRT
            </div>
            {dataQrt.length === 0 ? (
                <h2>grafica Qrt</h2>
            ) : (
                <Doughnut data={dataQrt} className="grafica-pastel"/>
            )}
        </div>
    );
}