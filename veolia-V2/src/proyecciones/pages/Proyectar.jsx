import { useEffect, useMemo, useState } from 'react'
import { TituloVista } from '../../ui/components/TituloVista';
import { TabTable } from '../../ui/components/TabTable';
import { useSelectStore } from '../../hooks/useSelectStore';
import { getLineasTiempo } from '../services/proyectar';
import { TablaComponentes } from '../../ui/components/TablaComponentes';
import { Selectores } from '../../ui/components/Selectores';
import { columsLineasTiempo } from '../components/data';
import { VariablesProyectar } from '../components/proyectar/VariablesProyectar';
 
export const Proyectar = () => {
    const { aps, proy, requestProyectar } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0);
    const [lineasTiempo, setLineasTiempo] = useState([]);

    const request = {
        proyid: proy,
    };

    const onDataLineasTiempo = async() => {
        try{
            const lineas = await getLineasTiempo(request);
            setLineasTiempo(lineas);
        } catch {
            console.error('error en data proyectar');
        }
    };

    const onEjecutarData = async() => {
        try{
            // await postLineasTiempo(requestProyectar);
        } catch {
            console.error('error en data proyectar');
        }
    };

    useEffect(() =>{
        if (aps && proy){
            onDataLineasTiempo();
        }
    }, [aps, proy]);

    const titulosTabs = useMemo(() => [
        { titulo: 'Lineas de tiempo', datos: lineasTiempo, encabezado: columsLineasTiempo },
        { titulo: 'Variables' },
    ], [lineasTiempo]);

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Proyectar" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorProy={true} selectDrescripcion={true} selectHorizonte={true}/>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                <div className="panel">
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
                        <button
                            className='btn btn-success'
                            style={{ width: '12rem' }}
                        >
                            EJECUTAR
                        </button>
                    </div>
                    { titulosTabs[pestañaActiva].titulo === 'Lineas de tiempo' ?
                        <TablaComponentes 
                            data={titulosTabs[pestañaActiva].datos} 
                            colums={titulosTabs[pestañaActiva].encabezado} 
                            page={true}
                        /> 
                        : 
                        <VariablesProyectar />
                    }
                </div>
            </div>
        </div>
    </>
  )
};