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
    const [editarCrear, setEditarCrear] = useState('');
    
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
            setModal(false);
        } catch (error) {
            console.error(error);
        }
    }

    const abrirModal = (item) => {
        setModal(true);
        setEditarCrear(item);
    }

    const cerrarModal = () => {
        setModal(false);
    }

    useEffect(() =>{
        onDatosCrear();
    }, [])

    return(
    <>
        <div>
            <div className="bodyComponent" >
                <TablaInformesGerenciales 
                    datos={dataCrear} 
                    tituloTabla={'PROYECCIONES DE SUBSIDIO / CONTRIBUCIÓN'} 
                    colums={columnsCrear} 
                    acciones={true}
                    modal={abrirModal}
                />
                <ModalActualizarProy show={modal} cerrar={cerrarModal} editar={editarCrear} actualizar={onActualizarCrear}/>
            </div>
        </div>
    </>
  )
};