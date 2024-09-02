import { Http } from "../../helpers/axiosHelper";

const month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const nombreMes = (index) => {
    if (index < 0 || index > 12) return index;
    return month[index - 1];
};

const getQrt = async (data) => {
    try{        
        const response = await Http.get('procesos/qrt', data);
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
          data: [],
          backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
          hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
        },
      ],
      options: {
        legend: {
          position: "right",
        },
      },
    };

    const tipos = [];
    const valores = [];

    await data.forEach((element) => {
      tipos.push(element.TIPO);
      valores.push(element.VALOR);
    });

    chartQrt.labels = tipos;
    chartQrt.datasets[0].data = valores;

    return chartQrt;
  } catch {
    console.error('error en data proyeccion');
  }
}

const getQa = async (data) => {
  try{        
      const response = await Http.get('procesos/qa', data);
      return response;
  }
  catch(error){
      console.log('error en data proyeccion', error);
  }
}

export const getQaChart = async (dataQa) => { 
    try{        
        const data = await getQa(dataQa);
        
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

const getTafna = async (data) => {
  try{        
      const response = await Http.get('procesos/tafna', data);
      return response;
  }
  catch(error){
      console.log('error en data proyeccion', error);
  }
}

export const getTafnaChart = async (dataTafna) => { 
  try{
    const data = await getTafna(dataTafna);
    
    const chartLbl = {
      labels: [],
      datasets: [
        {
          label: "",
          backgroundColor: "#9500c7",
          borderColor: "#0d5ba8",
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#000000",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [],
        }
      ],
    };

    const tipos = [];
    const valores = [];
    
    await data.forEach((element) => {
      tipos.push(nombreMes(element.MES));
      valores.push(element.VALOR);
    });

    chartLbl.labels = tipos;
    chartLbl.datasets[0].data = valores;

    return chartLbl;
  } catch {
    console.error('error en data proyeccion');
  }
}

const getLbl = async (data) => {
  try{        
      const response = await Http.get('procesos/lbl', data);
      return response;
  }
  catch(error){
      console.log('error en data proyeccion', error);
  }
}

export const getLblChart = async (dataLbl) => {
  try{
    const data = await getLbl(dataLbl);
    const chartLbl = {
        labels: [],
        datasets: [
            {
                label: '',
                minBarLength: 10,
                scaleStartValue:3000,
                data: [],
                backgroundColor: [
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                    '#006dc7',
                ],
                hoverBackgroundColor: []
            }
        ]
    };

    const tipos =[];
    const valores = [];

    await data.forEach(element => {     
        tipos.push(nombreMes(element.MES));
        valores.push(element.VALOR);

    });

    chartLbl.labels = tipos;
    chartLbl.datasets[0].data = valores;

    return chartLbl;

  }catch(err){
      console.error(err)
  }
}

const getTrna = async (data) => {
  try{        
      const response = await Http.get('procesos/trna', data);
      return response;
  }
  catch(error){
      console.log('error en data proyeccion', error);
  }
}

export const getTrnaChart = async (dataTrna) => {
  try{
    const data = await getTrna(dataTrna);

    const chartTrna = {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          backgroundColor: [
            "#ffffff",
            "#db0000",
            "#83db00",
            "#ebc22f",
            "#9b00de",
            "#2ea39d",
            "#27b800",
            "#72a32e",
            "#ff028c",
            "#d6b20f",
          ],
          borderColor: "#2ea39d",
          fill: false,
          hoverBackgroundColor: [],
        },
      ],
    };

    const tipos = [];
    const valores = [];

    await data.forEach((element) => {
      tipos.push(element.FAPR_NOMBRE);
      valores.push(element.TRNA);
    });

    chartTrna.labels = tipos;
    chartTrna.datasets[0].data = valores;

    return chartTrna;

  } catch {
    console.error('error en data proyeccion');
  }
}

const getUsuarios = async (data) => {  
  try{        
      const response = await Http.get('procesos/usuarios', data);      
      return response;
  }
  catch(error){
      console.log('error en data proyeccion', error);
  }
}

export const getUsuariosChart = async (dataUsuarios) => {
  try{
    const response = await getUsuarios(dataUsuarios);
    console.log('response data: ', response);
    
    const stackedData = {
      labels: ["N"],
      datasets: [
        {
          type: "bar",
          label: null,
          backgroundColor: "#42A5F5",
          data: [],
        },
        {
          type: "bar",
          label: null,
          backgroundColor: "#66BB6A",
          data: [],
        },
        {
          type: "bar",
          label: null,
          backgroundColor: "#FFA726",
          data: [],
        },
      ],
    };
    let x = 0;

    await response.forEach((element) => {
      console.log('element: ', element);
      stackedData.datasets[x].label = element.TIPO;
      stackedData.datasets[x].data.push(element.VALOR);
      x++;
    });

    if (x === 0) return null;
    const chart = {
      chart: stackedData,
      options: {
        tooltips: {
          mode: "index",
          intersect: false,
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    };
    
    return chart;

  } catch {
    console.error('error en data proyeccion');
  } 
}

const getTarifas = async (data) => {  
  try{        
      const response = await Http.get('procesos/tarifas', data);      
      return response;
  }
  catch(error){
      console.log('error en data proyeccion', error);
  }
}

export const getTarifasChart = async (dataTarifas) => {
  try{
    const data = await getTarifas(dataTarifas);

    const chartTarifas = {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          backgroundColor: [
            "#72a32e",
            "#db0000",
            "#83db00",
            "#ebc22f",
            "#9b00de",
            "#2ea39d",
            "#27b800",
            "#72a32e",
            "#ff028c",
            "#d6b20f",
          ],
          hoverBackgroundColor: [],
        },
      ],
    };

    const tipos = [];
    const valores = [];

    if (data.length > 0) {
      Object.keys(data[0]).forEach((elemento) => {
        tipos.push(elemento);
      });

      tipos.splice(0, 3);

      Object.values(data[0]).forEach((elemento) => {
        valores.push(elemento);
      });

      valores.splice(0, 3);
    }

    chartTarifas.labels = tipos;
    chartTarifas.datasets[0].data = valores;

    return chartTarifas;

  } catch {
    console.error('error en data proyeccion');
  } 
}