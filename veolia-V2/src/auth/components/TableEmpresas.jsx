import { useEffect, useState } from 'react'
import {empresasService} from '../services/empresasService'
import { Button, Table } from 'react-bootstrap'
import { EditarEmpresaModal } from './EditarEmpresaModal';
import { NewEmpresaModal } from './NewEmpresaModal';

export const TableEmpresas = () => {

    const [tablaDatos, setTablaDatos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newEmpresa, setNewEmpresa] = useState({
        EMPR_NOMBRE: '',
        EMPR_PROPIA: 0,
        EMPR_ESTADO: "0",
        EMPR_NUAP: '',
    });

    const fetchData = async () =>{
        try {
            const data = await empresasService.getAllEmpresas();
            setTablaDatos(data);

        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const handleEdit = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = async () => {
        try {
            await empresasService.upDataEmpresa(selectedItem);
            handleCloseModal();
            fetchData();
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }
    };


    const handleCloseNewModal = () => {
        setShowNewModal(false);
    };

    const handleSaveNewEmpresa = async () => {
        try {
            await empresasService.saveNewEmpresa(newEmpresa);
            handleCloseNewModal();
            fetchData();
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }

    }






  return (
    <div className='container'>
        <h2>Gestion Empresas</h2>
        <Button onClick={()=> setShowNewModal(true)}>Nueva Empresa</Button>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Propio</th>
                    <th>Estado</th>
                    <th>Nuap</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    tablaDatos.map((item, index) => (
                        <tr key={index}>
                            <td>{item.EMPR_EMPR}</td>
                            <td>{item.EMPR_NOMBRE}</td>
                            <td>{item.EMPR_PROPIA === 0 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                            <td>{item.EMPR_ESTADO === "1" ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                            <td>{item.EMPR_NUAP}</td>
                            <td>
                                <button  className="btn btn-primary" onClick={()=>handleEdit(item)}>Editar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>

        {
            showModal && (
                <EditarEmpresaModal
                    selectedItem={selectedItem}
                    handleCloseModal={handleCloseModal}
                    handleSaveChanges={handleSaveChanges}
                    setSelectedItem={setSelectedItem}
                />
            )
        }

        <NewEmpresaModal
            showNewModal={showNewModal}
            handleCloseModal={handleCloseNewModal}
            handleSaveNewEmpresa={handleSaveNewEmpresa}
            newEmpresa={newEmpresa}
            setEmpresa={setNewEmpresa}
        />


    </div>
  )
}
