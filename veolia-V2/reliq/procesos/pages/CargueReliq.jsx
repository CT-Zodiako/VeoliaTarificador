import { useEffect, useMemo, useState } from "react";
import { useSelectStore } from "../../../src/hooks/useSelectStore";
import { getAdicionalRelq, getApsRelq, getEmpresaRelq, getRellenoRelq, getUsuarioRelq, updateAdicionalRelq, updateEmpresaRelq, updateRellenoRelq, updateUsuarioRelq } from "../services/CargueReliqServices";
import { Selectores } from "../../../src/ui/components/Selectores";
import { TabTable } from "../../../src/ui/components/TabTable";
import { TituloVista } from "../../../src/ui/components/TituloVista";
import { columsAdicionalReliq, columsEmpreReliq, columsRellenosReliq, columsUsuarioReliq, keyTranformEmpre, objetoAdic, objetoEmpr, objetoRelleno, objetoUsua } from "../services/data";
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
    // const { alerta, agregarAlerta, onCerrarAlerta } = useAlertas();

    const onDataEmpresa = async() => {
        try{
            const empresa = await getEmpresaRelq(requestReliq);
            const newData = transformacionData(empresa, keyTranformEmpre);
            setDataEmpresa(newData);
            // agregarAlerta('Se agrego la data de empresa', 'success');
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
            return setDataRelleno(relleno);
        } catch {
            console.error('error en data relleno');
        }
    };

    const onActulalizarEmpresa = async(data) => {
        try{
            await updateEmpresaRelq(data);
        } catch {
            console.error('error en data empresa');
        }
    };

    const onActulalizarAdicional = async(data) => {
        try{
            await updateAdicionalRelq(data);
        } catch {
            console.error('error en data empresa');
        }
    };

    const onActualizarUsuario = async (data) => {
        try {
            await updateUsuarioRelq(data);
        } catch (error) {
            console.error('Error en la actualización del usuario:', error);
        }
    };

    const onActualizarRelleno = async (data) => {
        try {
            return await updateRellenoRelq(data);
        } catch (error) {
            console.error('Error en la actualización del relleno:', error);
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
        { titulo: 'Resum. Usuarios', datos: dataUsuarios, encabezado: columsUsuarioReliq, objEditar: objetoUsua, actualizar: onActualizarUsuario, refresh: onDataUsuarios },
        { titulo: 'Resum. Empresa', datos: dataEmpresa, encabezado: columsEmpreReliq, objEditar: objetoEmpr, actualizar: onActulalizarEmpresa, refresh: onDataEmpresa },    
        { titulo: 'Resum. Adicional', datos: dataAdicional, encabezado: columsAdicionalReliq, objEditar: objetoAdic, actualizar: onActulalizarAdicional, refresh: onDataAdicional },
        { titulo: 'Resum. Relleno', datos: dataRelleno, encabezado: columsRellenosReliq, objEditar: objetoRelleno, actualizar: onActualizarRelleno, refresh: onDataRelleno },
        // { titulo: 'Resum. Aps', datos: dataAps, encabezado: [], objEditar: {}, actualizar: () => {}, refresh: () => {} },
    ], [dataEmpresa, dataAdicional, dataUsuarios]);

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
                        actualizar={titulosTabs[pestañaActiva].actualizar}
                        onData={titulosTabs[pestañaActiva].refresh}
                        data={titulosTabs[pestañaActiva].datos} 
                        colums={titulosTabs[pestañaActiva].encabezado}
                        objEditar={titulosTabs[pestañaActiva].objEditar}
                    />
                </div>
            </div>
            {/* {alerta.length > 0 &&
              <Alertas alerta={alerta} onCerrarAlerta={onCerrarAlerta}/>
            } */}
        </div>
    </>
  )
};