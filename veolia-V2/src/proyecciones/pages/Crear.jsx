import { useEffect, useState } from 'react'
import { getCrear, postCrear } from '../services/craerService';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { columnsCrear, formatoCrear } from '../components/data';
import { ModalActualizarProy } from '../components/ModalActualizarProy';

export const Crear = () => {
    const[dataCrear, setDataCrear] = useState({
        formato:{},
        datos:[]
    });
    const [modal, setModal] = useState(false); 
    const [itemEditar, setItemEditar] = useState('');
    const [accion, setAccion] = useState(false);
    
    const onDatosCrear = async() => {
        try{
            const crear = await getCrear();
            setDataCrear({
                ...dataCrear,
                formato: formatoCrear,
                datos: crear
            });
        } catch {
            console.error('error en data crear');
        }
    }

    const onActualizarCrear = async(item) => {
        try {
            await postCrear(item);
            onDatosCrear();
            cerrarModal();
        } catch (error) {
            console.error(error);
        }
    }

    const abrirModal = (item, tipo) => {
        setModal(true);
        setItemEditar(item);
        setAccion(tipo);
    }

    const cerrarModal = () => {
        setModal(false);
        setItemEditar('');
    }

    useEffect(() =>{
        onDatosCrear();
    }, [])

    return(
    <>
        <div>
            <div className="bodyComponent" >
                <button
                    className="btn btn-primary btn-md"
                    onClick={() => abrirModal('', true)}
                >
                    <h3>Nuevo</h3>
                </button>
                <TablaInformesGerenciales 
                    datos={dataCrear} 
                    tituloTabla={'PROYECCIONES DE SUBSIDIO / CONTRIBUCIÓN'} 
                    colums={columnsCrear} 
                    acciones={true}
                    modal={abrirModal}
                />
                {
                    accion ? (
                        <ModalActualizarProy show={modal} cerrar={cerrarModal} actualizar={onActualizarCrear}/>
                    ) : (
                        <ModalActualizarProy show={modal} cerrar={cerrarModal} editar={itemEditar} actualizar={onActualizarCrear}/>
                    )
                }
                {/* <ModalActualizarProy show={modal} cerrar={cerrarModal} editar={itemEditar} actualizar={onActualizarCrear}/> */}
            </div>
        </div>
    </>
  )
};