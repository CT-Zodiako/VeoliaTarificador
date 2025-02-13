import { useEffect, useMemo, useState } from "react";
import { useSelectStore } from "../../../src/hooks/useSelectStore";
import { getAdicionalRelq, getApsRelq, getEmpresaRelq, getRellenoRelq, getUsuarioRelq } from "../services/CargueReliqServices";
import { Selectores } from "../../../src/ui/components/Selectores";
import { TabTable } from "../../../src/ui/components/TabTable";
import { TituloVista } from "../../../src/ui/components/TituloVista";
import { columsAdicionalReliq, columsEmpreReliq, objetoAdic, objetoEmpr } from "../services/data";
import { TablaEmpresaReliq } from "../components/cargueReliq/TablaEmpresaReliq";
import { Alertas } from "../../../src/ui/components/Alertas";
import { useAlertas } from "../../../src/hooks/useAlertas";

export const CargueReliq = () => {
    const { aps, reliq, requestReliq } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0);
    const [ dataEmpresa, setDataEmpresa ] = useState([]);
    const [ dataAdicional, setDataAdicional ] = useState([]);
    const [ dataUsuarios, setDataUsuarios ] = useState([]);
    const [ dataAps, setDataAps ] = useState([]);
    const [ dataRelleno, setDataRelleno ] = useState([]);
    const { alerta, agregarAlerta, onCerrarAlerta } = useAlertas();

    const onDataEmpresa = async() => {
        try{
            const empresa = await getEmpresaRelq(requestReliq);
            setDataEmpresa(empresa);
            agregarAlerta('Se agrego la data de empresa', 'success');
        } catch {
            console.error('error en data empresa');
        }
    };

    const onDataAdicional = async() => {
        try{
            const adicional = await getAdicionalRelq(requestReliq);
            setDataAdicional(adicional);
        } catch {
            console.error('error en data adicional');
        }
    };

    const onDataUsuarios = async() => {
        try{
            const usuarios = await getUsuarioRelq(requestReliq);
            setDataUsuarios(usuarios);
        } catch {
            console.error('error en data usuarios');
        }
    };

    const onDataAps = async() => {
        try{
            const aps = await getApsRelq(requestReliq);
            setDataAps(aps);
        } catch {
            console.error('error en data aps');
        }
    };

    const onDataRelleno = async() => {
        try{
            const relleno = await getRellenoRelq(requestReliq);
            setDataRelleno(relleno);
        } catch {
            console.error('error en data relleno');
        }
    };
    
    useEffect(() =>{
        if (aps && reliq){
            onDataEmpresa();
            onDataAdicional();
            onDataUsuarios();
            onDataAps();
            onDataRelleno();
        }
    }, [aps, reliq]);

    const titulosTabs = useMemo(() => [
        { titulo: 'Resum. Empresa', datos: dataEmpresa, encabezado: columsEmpreReliq, objEditar: objetoEmpr },
        { titulo: 'Resum. Adicional', datos: dataAdicional, encabezado: columsAdicionalReliq, objEditar: objetoAdic },
        // { titulo: 'Resum. Usuarios', datos: dataUsuarios, encabezado: columsLineasTiempo },
        // { titulo: 'Resum. Aps', datos: dataAps, encabezado: columsLineasTiempo },
        // { titulo: 'Resum. Relleno', datos: dataRelleno, encabezado: columsLineasTiempo },
    ], [dataEmpresa, dataAdicional, dataUsuarios, dataAps, dataRelleno]);

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

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
                <div className="panel">
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
                        <button
                            className='btn btn-success'
                            style={{ width: '12rem' }}
                        >
                            EJECUTAR
                        </button>
                    </div>
                    <TablaEmpresaReliq 
                        data={titulosTabs[pestañaActiva].datos} 
                        colums={titulosTabs[pestañaActiva].encabezado}
                        objEditar={titulosTabs[pestañaActiva].objEditar}
                    />
                </div>
            </div>
            {alerta.length > 0 &&
              <Alertas alerta={alerta} onCerrarAlerta={onCerrarAlerta}/>
            }
        </div>
    </>
  )
};