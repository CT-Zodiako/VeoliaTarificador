import { useEffect, useMemo, useState } from "react";
import { useSelectStore } from "../../../src/hooks/useSelectStore";
import { getAdicionalRelq, getApsRelq, getEmpresaRelq, getRellenoRelq, getUsuarioRelq, updateAdicionalRelq, updateApsRelq, updateEmpresaRelq, updateRellenoRelq, updateUsuarioRelq } from "../services/CargueReliqServices";
import { Selectores } from "../../../src/ui/components/Selectores";
import { TabTable } from "../../../src/ui/components/TabTable";
import { TituloVista } from "../../../src/ui/components/TituloVista";
import { columsAdicionalReliq, columsApsReliq, columsEmpreReliq, columsRellenosReliq, columsUsuarioReliq, keyTranformAps, keyTranformEmpre, objetoAdic, objetoAps, objetoEmpr, objetoRelleno, objetoUsua } from "../services/data";
import { TablaEmpresaReliq } from "../components/cargueReliq/TablaEmpresaReliq";
import { Alertas } from "../../../src/ui/components/Alertas";
import { useAlertas } from "../../../src/hooks/useAlertas";

export const CargueReliq = () => {
    const { aps, reliq, requestReliq } = useSelectStore();
    const [ pestañaActiva, setPestañaActiva ] = useState(0);
    const [ dataEmpresa, setDataEmpresa ] = useState([]);
    const [ dataAdicional, setDataAdicional ] = useState([]);
    const [ dataUsuarios, setDataUsuarios ] = useState([]);
    const [ dataAps, setDataAps ] = useState([]);
    const [ dataRelleno, setDataRelleno ] = useState([]);
    const { alerta, onManejoAlerta, onCerrarAlerta } = useAlertas();

    const onDataEmpresa = async() => {
        const empresa = await getEmpresaRelq(requestReliq);
        const newData = transformacionData(empresa, keyTranformEmpre);
        setDataEmpresa(newData);
        // agregarAlerta('Se agrego la data de empresa', 'success');
    };

    const onDataAdicional = async() => {
        const adicional = await getAdicionalRelq(requestReliq);
        setDataAdicional(adicional.data);
        onManejoAlerta(adicional);
    };

    const onDataUsuarios = async() => {
        const usuarios = await getUsuarioRelq(requestReliq);
        setDataUsuarios(usuarios);
    };

    const onDataAps = async() => {
        const aps = await getApsRelq(requestReliq);
        const newData = transformacionData(aps, keyTranformAps);
        setDataAps(newData);
    };

    const onDataRelleno = async() => {
        const relleno = await getRellenoRelq(requestReliq);
        setDataRelleno(relleno);
    };

    const onActulalizarEmpresa = async(data) => {
        await updateEmpresaRelq(data);
    };

    const onActulalizarAdicional = async(data) => {
        await updateAdicionalRelq(data);
    };

    const onActualizarUsuario = async (data) => {
        await updateUsuarioRelq(data);
    };

    const onActualizarRelleno = async (data) => {
        await updateRellenoRelq(data);
    };

    const onActualizarAps = async (data) => {
        await updateApsRelq(data);
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

    const transformacionData = (data, keyTranform) => {
        return data.map(item => {
            let newItem = { ...item };
            Object.keys(keyTranform).forEach(key => {
                if (item.hasOwnProperty(key)) {
                    newItem[keyTranform[key]] = item[key];
                    delete newItem[key];
                }
            });
            return newItem;
        });
    };

    const titulosTabs = useMemo(() => [
        { titulo: 'Resum. Empresa', datos: dataEmpresa, encabezado: columsEmpreReliq, objEditar: objetoEmpr, actualizar: onActulalizarEmpresa, refresh: onDataEmpresa },    
        { titulo: 'Resum. Aps', datos: dataAps, encabezado: columsApsReliq, objEditar: objetoAps, actualizar: onActualizarAps, refresh: onDataAps },
        { titulo: 'Resum. Relleno', datos: dataRelleno, encabezado: columsRellenosReliq, objEditar: objetoRelleno, actualizar: onActualizarRelleno, refresh: onDataRelleno },
        { titulo: 'Resum. Adicionales', datos: dataAdicional, encabezado: columsAdicionalReliq, objEditar: objetoAdic, actualizar: onActulalizarAdicional, refresh: onDataAdicional },
        { titulo: 'Resum. Usuarios', datos: dataUsuarios, encabezado: columsUsuarioReliq, objEditar: objetoUsua, actualizar: onActualizarUsuario, refresh: onDataUsuarios },
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
                            CARGAR
                        </button>
                    </div>
                    <TablaEmpresaReliq 
                        actualizar={titulosTabs[pestañaActiva].actualizar}
                        onData={titulosTabs[pestañaActiva].refresh}
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