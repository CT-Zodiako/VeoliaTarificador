import { useEffect, useState } from 'react'
import { getCrear } from '../services/craerService';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { columnsCrear, formatoCrear } from '../components/data';

export const Crear = () => {
    const[dataCrear, setDataCrear] = useState({
        formato:{},
        datos:[]
    });
    console.log('dataCrear: ', dataCrear);
    
    const onDatosCrear = async() => {
        try{
            const crear = await getCrear();
            setDataCrear({
                ...dataCrear,
                formato: formatoCrear,
                datos: crear
            });
        } catch {
            console.error('error en data crear');
        }
    }

    useEffect(() =>{
        onDatosCrear();
    }, [])

    return(
    <>
        <div>
            <div className="bodyComponent" >
                <TablaInformesGerenciales datos={dataCrear} tituloTabla={'PROYECCIONES DE SUBSIDIO / CONTRIBUCIÓN'} colums={columnsCrear} acciones={true}/>
            </div>
        </div>
    </>
  )
};