import { useEffect, useState } from "react";
import { useSelectStore } from "../../../src/hooks/useSelectStore";
import { Selectores } from "../../../src/ui/components/Selectores";
import { TabTable } from "../../../src/ui/components/TabTable";
import { TituloVista } from "../../../src/ui/components/TituloVista";

export const Cargue = () => {
    const { aps, proy, requestProyectar } = useSelectStore();

    const [ dataEmpresa, setDataEmpresa ] = useState([]);
    const [ dataAdicional, setDataAdicional ] = useState([]);
    const [ dataUsuarios, setDataUsuarios ] = useState([]);
    const [ dataAps, setDataAps ] = useState([]);
    const [ dataRelleno, setDataRelleno ] = useState([]);

    const onDataEmpresa = async() => {
        try{
            // const empresa = await getEmpresa();
            // setDataEmpresa(empresa);
        } catch {
            console.error('error en data empresa');
        }
    };

    const onDataAdicional = async() => {
        try{
            // const adicional = await getAdicional();
            // setDataAdicional(adicional);
        } catch {
            console.error('error en data adicional');
        }
    };

    const onDataUsuarios = async() => {
        try{
            // const usuarios = await getUsuarios();
            // setDataUsuarios(usuarios);
        } catch {
            console.error('error en data usuarios');
        }
    };

    const onDataAps = async() => {
        try{
            // const aps = await getAps();
            // setDataAps(aps);
        } catch {
            console.error('error en data aps');
        }
    };

    const onDataRelleno = async() => {
        try{
            // const relleno = await getRelleno();
            // setDataRelleno(relleno);
        } catch {
            console.error('error en data relleno');
        }
    };
    
    useEffect(() =>{
        if (aps && proy){
            onDataLineasTiempo();
        }
    }, [aps, proy]);

    const titulosTabs = useMemo(() => [
        { titulo: 'Resum. Empresa', datos: dataEmpresa, encabezado: columsLineasTiempo },
        { titulo: 'Resum. Adicional', datos: dataAdicional, encabezado: columsLineasTiempo },
        { titulo: 'Resum. Usuarios', datos: dataUsuarios, encabezado: columsLineasTiempo },
        { titulo: 'Resum. Aps', datos: dataAps, encabezado: columsLineasTiempo },
        { titulo: 'Resum. Relleno', datos: dataRelleno, encabezado: columsLineasTiempo },
    ], [lineasTiempo]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Cargue" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorProy={true} selectDrescripcion={true} selectHorizonte={true}/>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                {/* <div className="panel">
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
                </div> */}
            </div>
        </div>
    </>
  )
};