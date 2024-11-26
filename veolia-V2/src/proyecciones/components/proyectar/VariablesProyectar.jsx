import { useEffect, useState } from "react";
import { useSelectStore } from "../../../hooks/useSelectStore";
import { TablaComponentes } from "../../../ui/components/TablaComponentes";
import { columnsPropiaVariables, columsTercerosVariables, columsUsuarioVariables } from "../data";
import { getPropiaVariables, getTercerosVariables, getUsuarioVariables } from "../../services/proyectar";
import { TabTable } from "../../../ui/components/TabTable";

export const VariablesProyectar = () => {
    const { aps, proy } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0);
    const [ usuarios, setUsuarios ] = useState([]);
    const [ propia, setPropia ] = useState([]);
    const [ terceros, setTerceros ] = useState([]);

    const request = {
        proyid: proy,
    };

    const onDataUsuarios = async() => {
        try{
            const usuario = await getUsuarioVariables(request);
            setUsuarios(usuario);
        } catch {
            console.error('error en data variables');
        }
    };

    const onDataPropia = async() => {
        try{
            const propia = await getPropiaVariables(request);
            setPropia(propia);
        } catch {
            console.error('error en data variables');
        }
    };

    const onDataTerceros = async() => {
        try{
            const terceros = await getTercerosVariables(request);
            setTerceros(terceros);
        } catch {
            console.error('error en data variables');
        }
    };

    const titulosTabs = [
        { titulo: 'Usuarios', datos: usuarios, encabezado: columsUsuarioVariables },
        { titulo: 'Propia', datos: propia, encabezado: columnsPropiaVariables },
        { titulo: 'Terceros', datos: terceros, encabezado: columsTercerosVariables },
    ];

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    useEffect(() =>{
        if (aps && proy){
            onDataUsuarios();
            onDataPropia();
            onDataTerceros();
        }
    }, [aps, proy]);

    return(
    <>  
        <div style={{ display: "flex", justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ width: '96%' }}>
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                <div className="panel">
                    <TablaComponentes 
                        data={titulosTabs[pestañaActiva].datos} 
                        colums={titulosTabs[pestañaActiva].encabezado} 
                        page={true}
                    />
                </div>
            </div>
        </div>
    </>
  )
};