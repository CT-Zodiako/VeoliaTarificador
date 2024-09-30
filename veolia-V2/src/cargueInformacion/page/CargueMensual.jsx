import React from 'react'
import { useAnnoSelector, useApsSelector, useMesSelector } from '../../store/storeSelectors';
 
export const CargueMensual = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector(state => state.anno);
    const mes = useMesSelector(state => state.mes);

    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [titulo, setTitulo] = useState('')
    const [dataPropia, setDataPropia] = useState([]);
    const [dataCompetidor, setDataCompetidor] = useState([]);
    const [dataUsuario, setDataUsuario] = useState([]);
    const [dataTerceros, setDataTerceros] = useState([]);

    const data = {
        APSA_ID : aps,
        ANNO: anno,
        MES: mes
    }

    const dataTablasCargue = async() => {
        try{
            const propia = await getPropia(data);
            setDataPropia(propia);

            const competidor = await getCompetidor(data);
            setDataCompetidor(competidor);

            const usuario = await getUsuario(data);
            setDataUsuario(usuario);

            const terceros = await getTerceros(data);
            setDataTerceros(terceros);
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    }

    const titulosTabs = [
        { titulo: 'info. Propia', datos: dataEnergia, encabezado: columsEnergia },
        { titulo: 'info. Competidor', datos: dataAcueducto, encabezado: columsAcueducto},
        { titulo: 'info. Usuario', datos: dataCostos, encabezado: columsCostos },
        { titulo: 'inffo. Terceros', datos: dataTarifas, encabezado: columsTarifa }
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
                {/* <TablaComponentes colums={titulosTabs[pestañaActiva].encabezado} data={titulosTabs[pestañaActiva].datos}/> */}
            </div>
        </div>
    </>
  )
};