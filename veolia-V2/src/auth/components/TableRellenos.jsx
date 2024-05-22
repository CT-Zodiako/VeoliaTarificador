import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { rellenosService } from '../services/rellenosService'
import { EditaModalRellenos } from './EditaModalRellenos';
import { NewRellenoModal } from './NewRellenoModal';

export const TableRellenos = () => {
    const [tableData, setTableData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModalEdit, setshowModalEdit] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);
    const [newRelleno, setNewRelleno] = useState({
        RELL_NOMRELLENO: '',
        RELL_PROPIO: 0,
        RELL_ESTADO: 0,
        RELL_REGIONAL: 0,
        RELL_NUSD: '',
    });

    const fetchData = async () => {
        try {
            const data = await rellenosService.getRellenos();
            setTableData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    
    }, [])

    const handleEdit = (item) => {
        setSelectedItem(item);
        setshowModalEdit(true);
    }

    const handleCloseModalEdit = () => {
        setshowModalEdit(false);
    }

    const handelSaveChanges = async () => {
        try {
            await rellenosService.upDataRellenos(selectedItem);
            handleCloseModalEdit();
            fetchData();
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }
    }

    const handleCloseNewModal = () => {
        setShowNewModal(false);
    }

    const handleSaveNewRelleno = async () => {
        try {
            console.log(newRelleno)
            await rellenosService.saveNewRelleno(newRelleno);
            handleCloseNewModal();
            fetchData();
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }
    }



    
    
    


  return (
    <div className='container'>
        <h2>Gestion Relleno</h2>
        <Button onClick={() => setShowNewModal(true)}>Nuevo Relleno</Button>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Propio</th>
                    <th>Regional</th>
                    <th>Estado</th>
                    <th>Nusd</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {tableData.map((item,index) => (
                    <tr key={index}>
                        <td>{item.RELL_ID}</td>
                        <td>{item.RELL_NOMRELLENO}</td>
                        <td>{item.RELL_PROPIO === 0 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                        <td>{item.RELL_ESTADO === 0 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                        <td>{item.RELL_REGIONAL === 0 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                        <td>{item.RELL_NUSD}</td>
                        <td>
                            <Button className='btn btn-primary' onClick={()=>{handleEdit(item)}}>Editar</Button>
                        </td>
                    </tr>
                ))}

            </tbody>

        </Table>

        
            {showModalEdit && <EditaModalRellenos
                selectedItem={selectedItem}
                handleCloseModal={handleCloseModalEdit}
                handleSaveChanges={handelSaveChanges}
                setSelectedItem={setSelectedItem}
            />}


            <NewRellenoModal
                showNewModal={showNewModal}
                handleCloseModal={handleCloseNewModal}
                handleSaveNewRelleno={handleSaveNewRelleno}
                newRelleno={newRelleno}
                setRelleno={setNewRelleno}
            />

    </div>
    
  )
}
