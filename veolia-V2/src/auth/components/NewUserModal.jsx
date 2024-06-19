
import {Modal, Form} from 'react-bootstrap';


export const NewUserModal = ({showNewModal, handleCloseModal, handleSaveNewUser, newUsuario, setUsuario}) => { 
    return (
        <Modal show={showNewModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='mb-3'>
                    <div>
                        <label htmlFor="name">Nombres</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={newUsuario.sisuNombres} 
                            onChange={(e) => setUsuario({ ...newUsuario, sisuNombres: e.target.value })} 
                        />
                    </div>

                    <div>
                        <label htmlFor="lastname">Apellidos</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastname" 
                            value={newUsuario.sisuApellidos} 
                            onChange={(e) => setUsuario({ ...newUsuario, sisuApellidos: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Correo</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            value={newUsuario.sisuCorreo} 
                            onChange={(e) => setUsuario({ ...newUsuario, sisuCorreo: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            value={newUsuario.sisuPass} 
                            onChange={(e) => setUsuario({ ...newUsuario, sisuPass: e.target.value })}
                        />
                    </div>

                    <Form.Group controlId="estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            as="select"
                            value={newUsuario.sisuEstado}
                            onChange={(e) => setUsuario({ ...newUsuario, sisuEstado: Number(e.target.value) })}
                        >
                            <option value="0">Inactivo</option>
                            <option value="1">Activo</option>
                        </Form.Control>
                    </Form.Group>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={handleSaveNewUser}>Guardar</button>
                <button className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
            </Modal.Footer>
        </Modal>
    )
}
