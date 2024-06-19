import { useState, useEffect } from 'react';
import { apsService } from '../services/apsService';
import { Table, Button } from 'react-bootstrap';
import EditModal from '../components/EditaModal'; // Importar el nuevo componente
import NewApsModal from './NewApsModal';

const TableUsers = () => {
    const [tableData, setTableData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);
    const [newAps, setNewAps] = useState({
        APSA_IDSUI: '',
        APSA_NOMAPS: '',
        APSA_RESOLUCION: 720,
        APSA_PROPIO: 0,
        APSA_SOLORELL: 0,
        APSA_ESTADO: 0,
    });

    const fetchData = async () => {
        try {
            const data = await apsService.getAps();
            setTableData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = async () => {
        try {
            console.log(selectedItem);
            await apsService.upDataAPS(selectedItem);
            handleCloseModal();
            fetchData(); // Recargar datos después de guardar cambios
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }
    };

    // const handleShowNewModal = () => {
    //     setShowNewModal(true);
    // };

    const handleCloseNewModal = () => {
        setShowNewModal(false);
    };

    const handleSaveNewAps = async () => {
        try {
            await apsService.saveNewAps(newAps);
            handleCloseNewModal();
            fetchData(); // Recargar datos después de guardar la nueva APS
        } catch (error) {
            console.error('Error guardando la nueva APS:', error);
        }
    };

    return (
        <div className="container">
            <h2>Gestion de areas de prestacion de servicio</h2>
            <Button onClick={() => setShowNewModal(true)}>Nueva APS</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Resolucion</th>
                        <th>Propio</th>
                        <th>Relleno</th>
                        <th>Estado</th>
                        <th>IAT</th>
                        <th>ID SUI</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.APSA_ID}</td>
                            <td>{item.APSA_NOMAPS}</td>
                            <td>{item.APSA_RESOLUCION}</td>
                            <td>{item.APSA_PROPIO === 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                            <td>{item.APSA_SOLORELL === 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                            <td>{item.APSA_ESTADO === 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                            <td>{item.APSA_VIAT === 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                            <td>{item.APSA_IDSUI}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => handleEdit(item)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal de edición */}
            {showModal && (
                <EditModal
                    selectedItem={selectedItem}
                    handleCloseModal={handleCloseModal}
                    handleSaveChanges={handleSaveChanges}
                    setSelectedItem={setSelectedItem}
                />
            )}

            <NewApsModal
                showNewModal={showNewModal}
                handleCloseModal={handleCloseNewModal}
                handleSaveNewAps={handleSaveNewAps}
                newAps={newAps}
                setNewAps={setNewAps}
            />
        </div>
    );
};

export default TableUsers;
