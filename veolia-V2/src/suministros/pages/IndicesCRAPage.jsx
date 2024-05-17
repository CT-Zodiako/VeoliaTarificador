import React, { useEffect, useState } from 'react';
import { getIndicesCRA } from '../service/indicesCRAService';
import { ModalNewIndiceCRA } from '../components/modaNewlndicesCRA';
import { ModalEditIndiceCRA } from '../components/modaEditlndicesCRA';
import { ApsSelector } from '../../ui/components/ApsSelector';
import { Selectores } from '../../ui/components/Selectores';

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
<>
    <h1>Indices Publicados por la CRA</h1>
    <Selectores selectorAps={true} selectorFecha={true} />
    <hr />

    <section className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-8"> {/* Cambiado de col-auto a col-md-8 para dar espacio al botón */}
                <div className="card rounded">
                    <div className="card-body">
                        <div className="table-responsive" style={{ maxHeight: '40rem', overflowY: 'auto' }}>
                            <table className="table table-striped table-bordered">
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
                                            <td className='text-end'><strong>$</strong> {item.INDI_VALOR}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-2"> {/* Nuevo div para el botón */}
                <div className="card rounded">
                    <div className="card-body">
                        {accionBoton()}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <ModalNewIndiceCRA
        show={modal}
        handleClose={handleCloseModal}
    />
    <ModalEditIndiceCRA
        show={modal}
        handleClose={handleCloseModal}
    />
</>


    );
};
