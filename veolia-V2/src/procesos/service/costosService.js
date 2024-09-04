import { Http } from "../../helpers/axiosHelper";

const month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const nombreMes = (index) => {
    if (index < 0 || index > 12) return index;
    return month[index - 1];
};

export const getCostos = async (data) => {
    try{        
        const response = await Http.get('procesos/costos', data);
        return response;
    }
    catch(error){      
        console.log('error en data costo', error);
    }
}

export const getCostoJSON = async (data) => {
    try{        
        const response = await Http.get('procesos/costosJson', data);
        return response;
    }
    catch(error){      
        console.log('error en data costo', error);
    }
}

export const getClusJson = async (data) => {
    try{        
        const response = await Http.get('procesos/clusJson', data);
        return response;
    }
    catch(error){      
        console.log('error en data costo', error);
    }
}

const getGraficaClus = async (data) => {
    try{        
        const response = await Http.get('procesos/costosClus', data);
        return response;
    }
    catch(error){      
        console.log('error en data costo', error);
    }
}

export const getCosClusChart= async(clus) => {
    try {
      const data = await getGraficaClus(clus);
      let chartCosClus = {
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

      let tipos = [];
      let valores = [];

      if (data.length > 0) {
        data.forEach((element) => {
          tipos.push(element.PARA_NOMBRE);
          valores.push(parseFloat(element.COST_VALOR.toFixed(6)));
        });
      }

      chartCosClus.labels = tipos;
      chartCosClus.datasets[0].data = valores;

      return chartCosClus;
    } catch (err) {
      console.error(err);
    }
  }

const getCompClus = async(data) => {
    console.log('data comportamiento: ', data);
    try {
        const response = await Http.get('procesos/comportamientoClus', data);
        return response;
    } catch (err) {
      console.error(err);
      AuthControl.verificarStatusCode(err);
    }
  }

export const getCompClusChart = async(dataComp) => {
    try {
      const data = await getCompClus(dataComp);

      let chartCompClus = {
        labels: [],
        datasets: [],
      };

      let tipos = [];
      let valores = [];

      if (data.length > 0) {
        data.forEach((element) => {
          tipos.push(nombreMes(element.INED_MES));
        });

        chartCompClus.labels = tipos;

        Object.keys(data[0]).forEach((elemento) => {
          valores.push({
            label: elemento.replace("INED_", ""),
            data: getValores(data, elemento),
            fill: false,
            borderColor:
              "#" +
              (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
          });
        });

        valores.splice(0, 3);

        chartCompClus.datasets = valores;
      }

      return chartCompClus;
    } catch (err) {
      console.error(err);
    }
  }

const getValores = (data, valor) => {
    let colection = [];
    data.forEach((elemento) => {
      colection.push(elemento[valor]);
    });
    return colection;
  }
