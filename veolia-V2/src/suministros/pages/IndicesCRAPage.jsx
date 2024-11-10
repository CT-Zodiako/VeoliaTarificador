import { useCallback, useEffect, useState } from 'react';
import { getIndicesCRA } from '../service/indicesCRAService';
import { ModalNewIndiceCRA } from '../components/indicesCRA/modaNewlndicesCRA';
import { ModalEditIndiceCRA } from '../components/indicesCRA/modaEditlndicesCRA';
import { Selectores } from '../../ui/components/Selectores';
import { useAnnoSelector, useMesSelector } from '../../store/storeSelectors';
import { TablaCRA } from '../components/indicesCRA/TablaCRA';

export const IndicesCRA = () => {
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);

    const [data, setData] = useState(null);
    const [modal, setModal] = useState(false);
    const [modalNew, setModalNew] = useState(false);

    const actualizarTabla = async () => {
        const data = await getIndicesCRA(anno, mes);
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
            return <button onClick={handleShowModalNew} className="btn btn-success">Agregar</button>;
        }
        return <button onClick={handleShowModal} className="btn btn-warning">Editar</button>;
    }, [data]);

    return (
    <>
        <div className="headerComponent">
            <div className="selector">
                <div className="col-12 d-flex justify-content-center">
                    <div className="width-Component">
                        <h1>Indices Publicados por la CRA</h1>
                    </div>
                </div>
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
