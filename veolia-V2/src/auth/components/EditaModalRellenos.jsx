import React from 'react'
import { Modal,Form } from 'react-bootstrap'

export const EditaModalRellenos = ({selectedItem, handleCloseModal, handleSaveChanges, setSelectedItem}) => {
  return (
    <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Rellenos</Modal.Title>
        </Modal.Header>

        <Modal.Body>
                <div>
                    <label htmlFor="id">Id</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="id" 
                        value={selectedItem.RELL_ID} 
                        readOnly
                    />
                </div>

                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        value={selectedItem.RELL_NOMRELLENO} 
                        onChange={(e) => setSelectedItem({ ...selectedItem, RELL_NOMRELLENO: e.target.value })} 
                    />
                </div>

                <div>
                    <label htmlFor="nusd">Nusd</label>    
                    <input 
                        type="text"
                        className='form-control'
                        id="nusd" 
                        value={selectedItem.RELL_NUSD}
                        onChange={(e) => setSelectedItem({ ...selectedItem, RELL_NUSD: e.target.value })}
                     />
                </div>
 
                <Form.Group controlId="propio">
                    <Form.Label>Relleno propio</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedItem.RELL_PROPIO}
                        onChange={(e) => setSelectedItem({ ...selectedItem, RELL_PROPIO: Number(e.target.value) })}
                    >
                        <option value="0">Si</option>
                        <option value="1">No</option>
                    </Form.Control>
                </Form.Group> 

                <Form.Group controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedItem.RELL_ESTADO}
                        onChange={(e) => setSelectedItem({ ...selectedItem, RELL_ESTADO: Number(e.target.value) })}
                    >
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="regional">
                    <Form.Label>Relleno regional</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedItem.RELL_REGIONAL}
                        onChange={(e) => setSelectedItem({ ...selectedItem, RELL_REGIONAL: Number(e.target.value) })}
                    >
                        <option value="0">No</option>
                        <option value="1">Sí</option>
                    </Form.Control>
                </Form.Group>

               
                 
                 
        </Modal.Body>

        <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
            <button className="btn btn-primary" onClick={handleSaveChanges}>Guardar</button>
        </Modal.Footer>

        


    </Modal>
  )
}
