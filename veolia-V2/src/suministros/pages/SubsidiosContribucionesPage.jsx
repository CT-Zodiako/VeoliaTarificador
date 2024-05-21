import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getSubCon,updateSubCon } from '../service/subsidiosContribucionesService'; // Asegúrate de que esta ruta sea correcta
import { useAnnoSelector, useMesSelector, useApsSelector } from '../../store/storeSelectors';
import { Selectores } from '../../ui/components/Selectores';

export const SubConPage = () => {
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const aps = useApsSelector((state) => state.aps);

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data with anno: ${anno}, mes: ${mes}, aps: ${aps}`);
                const result = await getSubCon(aps, anno, mes);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [anno, mes, aps]);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSave = async () => {
        
        try {
            await updateSubCon(data);
            handleCloseModal();
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }
    };

    const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    const getClaseText = (clase) => {
        switch (clase) {
            case 1:
                return 'Estrato 1';
            case 2:
                return 'Estrato 2';
            case 3:
                return 'Estrato 3';
            case 4:
                return 'Estrato 4';
            case 5:
                return 'Estrato 5';
            case 6:
                return 'Estrato 6';
            case 7:
                return 'Comercial';
            case 8:
                return 'Industrial';
            case 9:
                return 'Oficial';
            default:
                return 'Desconocido';
        }
    };
    

    return (
        <>
            <h1>Porcentajes de Subsidios y Contribuciones</h1>

            <Selectores selectorAps={true} selectorFecha={true} />
            <hr />
            <div className="container">
                <Button variant="primary" onClick={handleShowModal}>Editar Índices</Button>
                <hr />

                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Clase</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.SUCO_ID}>
                                    <td>{getClaseText(item.CLAS_CLASE)}</td>
                                    <td className='text-end'>
                                        <strong>$</strong> {item.SUCO_VALOR}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Índices</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {data.map((item, index) => (
                            <Form key={item.SUCO_ID}>
                                <Form.Group className="row">
                                    <Form.Label className="col-sm-3">Clase</Form.Label>
                                    <div className="col-sm-9">
                                        <Form.Control
                                            type="number"
                                            name="CLAS_CLASE"
                                            value={item.CLAS_CLASE}
                                            onChange={(e) => handleChange(index, 'CLAS_CLASE', e.target.value)}
                                            disabled
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group className="row">
                                    <Form.Label className="col-sm-3">Valor</Form.Label>
                                    <div className="col-sm-9">
                                        <Form.Control
                                            type="number"
                                            name="SUCO_VALOR"
                                            value={item.SUCO_VALOR}
                                            onChange={(e) => handleChange(index, 'SUCO_VALOR', e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                                <hr />
                            </Form>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                        <Button variant="primary" onClick={handleSave}>Guardar Cambios</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};
