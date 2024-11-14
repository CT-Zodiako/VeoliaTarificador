import { useCallback, useEffect, useState } from 'react';
import { getIndicesCRA } from '../service/indicesCRAService';
import { Selectores } from '../../ui/components/Selectores';
import { TituloVista } from '../../ui/components/TituloVista';
import { useSelectStore } from '../../hooks/useSelectStore';
import { ModalNewIndiceCRA, ModalEditIndiceCRA, TablaCRA } from '../components/indicesCRA';
import { useFuncionalidadesIndicesCRA } from '../hooks/useFuncionalidadesIndicesCRA';

export const IndicesCRA = () => {
    const { anno, mes, requestAnnoMes } = useSelectStore();
    const [data, setData] = useState(null);
    const [modal, setModal] = useState(false);
    const [modalNew, setModalNew] = useState(false);
    const { getIndiceText } = useFuncionalidadesIndicesCRA(data);

    const handleShowModal = () => {
        setModal(!modal);
    };

    const handleShowModalNew = () => {
        setModalNew(!modalNew);
    };

    const actualizarTabla = async () => {
        const data = await getIndicesCRA(requestAnnoMes);
        setData(data);
    };
    
    const accionBoton = useCallback(() => {
        if (data && data.length === 0) {
            return <button onClick={handleShowModalNew} className="btn btn-success" style={{ width: '6rem' }}>Agregar</button>;
        }
        return <button onClick={handleShowModal} className="btn btn-warning" style={{ width: '6rem' }}>Editar</button>;
    }, [data]);
    
    useEffect(() => {
        actualizarTabla();  
    }, [anno, mes]);

    return (
        <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Indices Publicados por la CRA" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} />
            </div>
        </div>
        <TablaCRA data={data} getIndiceText={getIndiceText} accionBoton={accionBoton}/>
        <ModalNewIndiceCRA
            show={modalNew}
            handleClose={handleShowModalNew}
        />
        <ModalEditIndiceCRA
            show={modal}
            handleClose={handleShowModal}
            actualizarTabla={actualizarTabla}
        />
    </>
    );
};