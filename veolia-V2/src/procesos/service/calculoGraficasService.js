import { Http } from "../../helpers/axiosHelper";
// import { montHelp } from "../components/monthService";

const month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const nombreMes = (index) => {
    if (index < 0 || index > 12) return index;
    return month[index - 1];
};

const getQrt = async (data) => {
    console.log('data en getQrt: ', data);
    try{        
        const response = await Http.get('procesos/qa', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getQrtChart = async (dataQrt) => { 
    try{        
        const data = await getQrt(dataQrt);
        
        const chartQrt = {
            labels: [],
            datasets: [
              {
                label: "",
                data: [],
                backgroundColor: [
                  "#f57802",
                  "#f57802",
                  "#f57802",
                  "#f57802",
                  "#f57802",
                  "#f57802",
                  "#f57802",
                  "#f57802",
                  "#f57802",
                  "#f57802",
                ],
                hoverBackgroundColor: [],
              },
            ],
          };
    
          const tipos = [];
          const valores = [];
    
          await data.forEach((element) => {
            tipos.push(nombreMes(element.MES));
            valores.push(element.VALOR);
          });

          chartQrt.labels = tipos;
          chartQrt.datasets[0].data = valores;
    
          return chartQrt;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}