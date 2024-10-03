import { useEffect, useState } from 'react';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { useAnnoSelector, useMesSelector } from '../../store/storeSelectors';
import { Selectores } from '../../ui/components/Selectores';
import { columnsHistProductividad, formatoHistProductividad } from '../components/data';
import { getHistorialProductividad } from '../service/historialProductividad';

export const HistorialProductividad = () => {
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);

    const [dataHisProductividad, setDataHisProductividad] = useState({
        formato: {},
        datos: []
    });
    
    const data = {
        anno: anno,
        mes: mes
    };

    const formatearNumero = (numero) => {
        if (!numero || isNaN(numero)) return null;
            return parseFloat(numero).toFixed(5);
    }

    const onHistorialProductividad = async () => {
        try {
            const response = await getHistorialProductividad(data);                
            const formattedData = response.map(item => ({
                ...item,
                PR22_VALOR: item.PR22_VALOR ? formatearNumero(item.PR22_VALOR) : item.PR22_VALOR,
            }));
            setDataHisProductividad({
                ...dataHisProductividad,
                formato: formatoHistProductividad,
                datos: formattedData
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (anno !== 0 && mes !== 0) {
            onHistorialProductividad();
        }
    },[anno, mes]);

    return(
    <>
    <div>
        <div>
          <div className="tituloComponent">
            <h3>Historial de Productividad</h3>
          </div>
          <div className="selector">
            <Selectores selectorFecha={true} />
          </div>
        </div>
        <div className="bodyComponent">
            <TablaInformesGerenciales datos={dataHisProductividad} colums={columnsHistProductividad} />
        </div>
      </div>
    </>
  )
};