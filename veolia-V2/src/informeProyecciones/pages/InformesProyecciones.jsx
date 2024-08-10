import { useEffect, useState } from "react"
import { TabTable } from "../../ui/components/TabTable"
import { Selectores } from "../../ui/components/Selectores"
import { useApsSelector, useProyeccionesSelector } from "../../store/storeSelectors"
import { getEnergia, getAcueducto, getCosto, getTarifas } from '../service/informesProyeccionesService';
import { columsEnergia, columsAcueducto, columsCostos, columsTarifa } from '../components/data';
import { TablaComponentes } from "../../ui/components/TablaComponentes";

export const InformesProyecciones = () => {
    const aps = useApsSelector(state => state.aps);
    const proy = useProyeccionesSelector(state => state.proy);
    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [titulo, setTitulo] = useState('')
    const [dataEnergia, setDataEnergia] = useState([]);
    const [dataAcueducto, setDataAcueducto] = useState([]);
    const [dataCostos, setDataCosto] = useState([]);
    const [dataTarifas, setDataTarifas] = useState([]);
    

    const data = {
        APSA_ID : aps,
        PROY_ID: proy
    }

    const dataTablasProyecciones = async() => {
        try{
            const energia = await getEnergia(data);
            setDataEnergia(energia);

            const acueducto = await getAcueducto(data);
            setDataAcueducto(acueducto);

            const costo = await getCosto(data);
            setDataCosto(costo);

            const tarifas = await getTarifas(data);
            setDataTarifas(tarifas);
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    }

    useEffect(()=>{
        if (aps && proy){
            dataTablasProyecciones();
        }
    }, [aps, proy])

    const titulosTabs = [
        { titulo: 'FACT Ene', datos: dataEnergia, encabezado: columsEnergia },
        { titulo: 'FACT Acu', datos: dataAcueducto, encabezado: columsAcueducto},
        { titulo: 'Costos', datos: dataCostos, encabezado: columsCostos },
        { titulo: 'Tarifas', datos: dataTarifas, encabezado: columsTarifa }
    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };

    return (
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorAps={true} selectorProy={true} />
                </div>
            </div>
            <div className="bodyComponent">
                <div className='listTable'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                </div>
                <TablaComponentes colums={titulosTabs[pestañaActiva].encabezado} data={titulosTabs[pestañaActiva].datos}/>
            </div>
        </div>
    );
}
