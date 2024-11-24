import { useEffect, useState } from 'react'
import { getCrear, postCrear } from '../services/craerService';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { columnsCrear, formatoCrear } from '../components/data';
import { ModalActualizarProy } from '../components/ModalActualizarProy';
import { TituloVista } from '../../ui/components/TituloVista';

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
    };

    const onActualizarCrear = async(item) => {
        try {
            await postCrear(item);
            onDatosCrear();
            cerrarModal();
        } catch (error) {
            console.error(error);
        }
    };

    const abrirModal = (item, tipo) => {
        setModal(true);
        setItemEditar(item);
        setAccion(tipo);
    };

    const cerrarModal = () => {
        setModal(false);
        setItemEditar('');
    };

    useEffect(() =>{
        onDatosCrear();
    }, []);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="PROYECCIONES DE SUBSIDIO / CONTRIBUCIÓN" />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent" >
            <div className='width-Component'>
                <div className="borde-table">
                    <button
                        className="btn btn-primary btn-md"
                        onClick={() => abrirModal('', true)}
                    >
                        <h6>Nuevo</h6>
                    </button>
                    <TablaInformesGerenciales 
                        datos={dataCrear} 
                        colums={columnsCrear} 
                        acciones={true}
                        modal={abrirModal}
                    />
                </div>
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