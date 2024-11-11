import { useCallback, useEffect, useState } from 'react';
import { getIndicesCRA } from '../service/indicesCRAService';
import { Selectores } from '../../ui/components/Selectores';
import { TituloVista } from '../../ui/components/TituloVista';
import { useSelectStore } from '../../hooks/useSelectStore';
import { ModalNewIndiceCRA, ModalEditIndiceCRA, TablaCRA } from '../components/indicesCRA';

export const IndicesCRA = () => {
    const { anno, mes, dataAnnoMes } = useSelectStore();
    const [data, setData] = useState(null);
    const [modal, setModal] = useState(false);
    const [modalNew, setModalNew] = useState(false);

    const actualizarTabla = async () => {
        const data = await getIndicesCRA(dataAnnoMes);
        setData(data);
    };
  
    useEffect(() => {
        actualizarTabla();  
    }, [anno, mes]);

    const getIndiceText = useCallback((item) => {
        if (item.PARA_INDICE20011 === 1) {
            return 'IPC';
        } else if (item.PARA_INDICE20011 === 2) {
            return 'SMLV';
        } else if (item.PARA_INDICE20011 === 3) {
            return 'IPCC';
        } else if (item.PARA_INDICE20011 === 4) {
            return 'IOEXP';
        } else {
            return 'Desconocido';
        }
    }, [data]);

    const handleShowModal = () => {
        setModal(!modal);
    };

    const handleShowModalNew = () => {
        setModalNew(!modalNew);
    };

    const accionBoton = useCallback(() => {
        if (data && data.length === 0) {
            return <button onClick={handleShowModalNew} className="btn btn-success" style={{ width: '6rem' }}>Agregar</button>;
        }
        return <button onClick={handleShowModal} className="btn btn-warning" style={{ width: '6rem' }}>Editar</button>;
    }, [data]);

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