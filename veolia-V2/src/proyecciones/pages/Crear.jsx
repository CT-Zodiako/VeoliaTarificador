import { useEffect, useState } from 'react'
import { getCrear } from '../services/craerService';
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

    const abrirModal = (item) => {
        setModal(true);
        setEditarCrear(item);
        console.log('editar este: ', item);
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
                <ModalActualizarProy show={modal} cerrar={cerrarModal}/>
            </div>
        </div>
    </>
  )
};