import { useEffect, useState } from "react";
import { Button, Table } from 'react-bootstrap'
import { getUsuarios, upDataUsuario, saveNewUsuario } from "../services/usuariosService";
import { EditarUsuario } from "./EditarUsuarioModal";
import { NewUserModal } from "./NewUserModal";

const TableComponent = () => {
    
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showNewModal, setShowNewModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newUsuario, setNewUsuario] = useState({
        sisuNombres: '',
        sisuApellidos: '',
        sisuCorreo: '',
        sisuPass: '',
        sisuEstado: 0
    });



    const fetchData = async () => {
        const response = await getUsuarios();
        setData(response);
    }


    useEffect(() => {
      fetchData();
      
    }, [])

    const handleEdit = (item) => {
        
        setSelectedItem(item);
        setShowModal(true);

    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = async () => {
        try {
            await upDataUsuario(selectedItem);
            console.log(selectedItem);
            handleCloseModal();
            fetchData();
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }
    };

    const handleCloseNewModal = () => {
        setShowNewModal(false);
    }

    const handleSaveNewUsuario = async () => {
        try {
            await saveNewUsuario(newUsuario);
            console.log(newUsuario);
            handleCloseNewModal();
            fetchData();
        }
        catch (error) {
            console.error('Error guardando los datos:', error);
        }
    }



    


  return (

    <div className="container">
        <h1>Gestion Usuarios</h1>

        <Button onClick={()=> setShowNewModal(true)} > Nuevo Usuario</Button>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th scope="col">Apellidos</th>
            <th scope="col">Nombres</th>
            <th scope="col">Correos</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
            <tr key={item.sisuId}>
                <td>{item.sisuApellidos}</td>
                <td>{item.sisuNombres}</td>
                <td>{item.sisuCorreo}</td>
                <td>{item.sisuEstado === 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</td>
                <td>
                <Button className="btn btn-primary" onClick={
                    ()=>handleEdit(item)
                }>Editar</Button>
                </td>
            </tr>
            ))}
        </tbody>
        </Table>

            {
                showModal && (
                    <EditarUsuario
                        selectedItem={selectedItem}
                        handleCloseModal={handleCloseModal}
                        handleSaveChanges={handleSaveChanges}
                        setSelectedItem={setSelectedItem}
                    />
                )
            }

            <NewUserModal
                showNewModal={showNewModal}
                handleCloseModal={handleCloseNewModal}
                handleSaveNewUser={handleSaveNewUsuario}
                newUsuario={newUsuario}
                setUsuario={setNewUsuario}   
            />
            
    </div>


  );
};

export default TableComponent;
