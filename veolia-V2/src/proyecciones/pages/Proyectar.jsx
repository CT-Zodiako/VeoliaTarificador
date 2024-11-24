import { useEffect } from 'react'
import { TituloVista } from '../../ui/components/TituloVista';
import { TabTable } from '../../ui/components/TabTable';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { useSelectStore } from '../../hooks/useSelectStore';
import { getLineasTiempo, getVariables } from '../services/proyectar';
 
export const Proyectar = () => {
    const { aps, anno, mes } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0);
    const [lineasTiempo, setLineasTiempo] = useState({
        formato:{},
        datos:[]
    });
    const [variables, setVariables] = useState({
        formato:{},
        datos:[]
    });

    const onDataLineasTiempo = async() => {
        try{
            const lineas = await getLineasTiempo();
            setLineasTiempo({
                ...lineasTiempo,
                formato: formatoProyectar,
                datos: lineas
            });
        } catch {
            console.error('error en data proyectar');
        }
    };

    const onDataVariables = async() => {
        try{
            const variables = await getVariables();
            setVariables({
                ...variables,
                formato: formatoVariables,
                datos: variables
            });
        } catch {
            console.error('error en data variables');
        }
    };

    const titulosTabs = [
        { titulo: 'Lineas de tiempo', datos: lineasTiempo, encabezado: [] },
        { titulo: 'Variables', datos: variables, encabezado: [] },
    ];

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    useEffect(() =>{
        if (aps && anno && mes){
            onDataLineasTiempo();
            onDataVariables();
        }
    }, [aps, anno, mes]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Proyectar" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                <div className="panel">
                    <TablaInformesGerenciales datos={titulosTabs[pestañaActiva].datos} tituloTabla={titulosTabs[pestañaActiva].titulo} colums={titulosTabs[pestañaActiva].encabezado} page={true}/>
                </div>
            </div>
        </div>
    </>
  )
};