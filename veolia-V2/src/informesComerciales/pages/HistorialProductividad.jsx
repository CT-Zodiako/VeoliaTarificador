import { useEffect, useState } from 'react';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { Selectores } from '../../ui/components/Selectores';
import { columnsHistProductividad, formatoHistProductividad } from '../components/data';
import { getHistorialProductividad } from '../service/historialProductividad';
import { TituloVista } from '../../ui/components/TituloVista';
import { useSelectStore } from '../../hooks/useSelectStore';
import { useFuncionalidadHistproduct } from '../hook/useFuncionalidadHistproduct';

export const HistorialProductividad = () => {
    const { anno, mes, requestFecha } = useSelectStore();
    const { onAsignacionData } = useFuncionalidadHistproduct();
    const [dataHisProductividad, setDataHisProductividad] = useState({
        formato: {},
        datos: []
    });
console.log(dataHisProductividad);
    const onHistorialProductividad = async () => {
        try {
            const response = await getHistorialProductividad(requestFecha);         
            const data = onAsignacionData(response); 
            setDataHisProductividad({
                ...dataHisProductividad,
                formato: formatoHistProductividad,
                datos: data
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (anno !== 0 && mes !== 0) {
            onHistorialProductividad();
        }
    },[anno, mes]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Historial de Productividad" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <div className='panel-tablas'>
                    <TablaInformesGerenciales datos={dataHisProductividad} colums={columnsHistProductividad} page={true}/>
                </div>
            </div>
        </div>
    </>
  )
};