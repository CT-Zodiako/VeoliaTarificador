import React, { useEffect, useState } from 'react';
import { getIndicesCRA } from '../service/indicesCRAService';
import { ModalNewIndiceCRA } from '../components/modaNewlndicesCRA';
import { ModalEditIndiceCRA } from '../components/modaEditlndicesCRA';
import { ApsSelector } from '../../ui/components/ApsSelector';

export const IndicesCRA = () => {
    const [data, setData] = useState(null);
    const [modal, setModal] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getIndicesCRA();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const getIndiceText = (item) => {
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
    };

    const handleShowModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);

    const accionBoton = () => {
        if (data && data.length === 0) {
            return <button onClick={handleShowModal} className="btn btn-success">Agregar</button>;
        }
        return <button onClick={handleShowModal} className="btn btn-warning">Editar</button>;
    };

    return (
        <div>
            <ApsSelector/>
            <h1>Indices CRA</h1>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <table className="table table-striped-columns">
                            <thead>
                                <tr>
                                    <th>Indice</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{getIndiceText(item)}</td>
                                        <td className='text-end'> <strong>$</strong> {item.INDI_VALOR}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto">
                        {accionBoton()}
                    </div>
                </div>
            </div>
            <ModalNewIndiceCRA
                show={modal}
                handleClose={handleCloseModal}
            />
            <ModalEditIndiceCRA
                show={modal}
                handleClose={handleCloseModal}
            />

        </div>
    );
};
