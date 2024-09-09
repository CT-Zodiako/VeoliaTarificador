import { useEffect, useState } from "react"
import { TabTable } from "../../ui/components/TabTable"
import { Selectores } from "../../ui/components/Selectores"
import { useApsSelector, useDescripcion, useHorizonteDesde, useHorizonteHasta, useProyeccionesSelector } from "../../store/storeSelectors"
import { getEnergia, getAcueducto, getCosto, getTarifas, getProyec } from '../service/informesProyeccionesService';
import { columsEnergia, columsAcueducto, columsCostos, columsTarifa, mesesAno } from '../components/data';
import { TablaComponentes } from "../../ui/components/TablaComponentes";

export const InformesProyecciones = () => {
    const aps = useApsSelector(state => state.aps);
    const proy = useProyeccionesSelector(state => state.proy);
    const setSelectedApsaId = useDescripcion(state => state.cambioDescripcion);
    const setHorizonteDesde = useHorizonteDesde(state => state.cambioHorizonteDesde);
    const setHorizonteHasta = useHorizonteHasta(state => state.cambioHorizonteHasta);

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

    const dataProyeccion = async() => {
        try{
            const proyec = await getProyec(data);            
            setSelectedApsaId(proyec.PROYDESCRIPCION);
            setHorizonteDesde(`${optionMes(proyec.PROYMESDES)} / ${proyec[0].PROYANNODES}`);
            setHorizonteHasta(`${optionMes(proyec.PROYMESHAS)} / ${proyec[0].PROYANNOHAS}`);
        } catch {
            console.error('data de proyecciones no encontrada');
        }
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
            dataProyeccion();
        }
    }, [aps, proy])

    const optionMes = (mes) => {
        const mesAno = mesesAno.find(
            m => m.id === mes
        );
        return mesAno.meses;
    }

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
            <div>
                <div className="tituloComponent">
                    <h3>INFORME PROYECCIONES - GENERALES</h3>
                </div>
                <div className="selector">
                    <Selectores selectorAps={true} selectorProy={true} selectDrescripcion={true} selectHorizonte={true}/>
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
