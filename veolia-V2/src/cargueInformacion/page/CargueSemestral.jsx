import React, { useEffect, useState } from 'react'
import { useAnnoSelector, useApsSelector, useMesSelector } from '../../store/storeSelectors';
import { getCargueSemestral } from '../service/cargueSemestralService';
import { Selectores } from '../../ui/components/Selectores';
import { TabTable } from '../../ui/components/TabTable';
import { InfoPropia } from '../components/InfoPropia';
import { InfoCompetidor } from '../components/InfoCompetidor';
import { InfoUsuario } from '../components/InfoUsuario';
 
export const CargueSemestral = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector(state => state.anno);
    const mes = useMesSelector(state => state.mes);

    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [titulo, setTitulo] = useState('')

    const data = {
        APSA_ID : aps,
        propia: 1,
    }

    const onCargueSemestral = async() => {
        try{
            const cargue = await getCargueSemestral(data);
            console.log('cargue', cargue);
        } catch {
            console.error('error en data cargue');
        }
    }

    useEffect(()=>{
        if (aps){
            onCargueSemestral();
        }
    }, [aps])

    // const titulosTabs = [
    //     { titulo: 'info. Propia', datos: dataEnergia, encabezado: columsEnergia },
    // ];
    const titulosTabs = [
        { titulo: 'info. Propia', info: InfoPropia },
        { titulo: 'info. Competidor', info: InfoCompetidor },
        { titulo: 'info. Usuario', info: InfoUsuario },
    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };

    return(
    <>
        <div>
            <div>
                <div className="tituloComponent">
                    <h3>Cargue Mensual</h3>
                </div>
                <div className="selector">
                    <Selectores selectorAps={true} selectorFecha={true}/>
                </div>
            </div>
            <div className="bodyComponent">
                <div className='listTable'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                </div>
                {titulosTabs[pestañaActiva].info &&  React.createElement(titulosTabs[pestañaActiva].info)}
            </div>
        </div>
    </>
  )
};