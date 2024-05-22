
import React from 'react'
import { Modal,Form } from 'react-bootstrap'

export const NewRellenoModal = ({
    showNewModal, 
    handleCloseModal, 
    handleSaveNewRelleno, 
    newRelleno, 
    setRelleno
}) => {
  return (
    <Modal show={showNewModal} onHide={handleCloseModal}>


        <Modal.Header closeButton>
            <Modal.Title>Nuevo Relleno</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form className='mb-3'>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        value={newRelleno.RELL_NOMRELLENO} 
                        onChange={(e) => setRelleno({ ...newRelleno, RELL_NOMRELLENO: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="nusd">Nusd</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nusd" 
                        value={newRelleno.RELL_NUSD} 
                        onChange={(e) => setRelleno({ ...newRelleno, RELL_NUSD: e.target.value })}
                    />
                </div>


                <Form.Group controlId="propio">
                    <Form.Label>Relleno propio</Form.Label>
                    <Form.Control
                        as="select"
                        value={setRelleno.RELL_PROPIO}
                        onChange={(e) => setRelleno({ ...newRelleno, RELL_PROPIO: Number(e.target.value) })}
                    >
                        <option value="0">No</option>
                        <option value="1">Si</option>
                    </Form.Control>
                </Form.Group> 

                <Form.Group controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        as="select"
                        value={setRelleno.RELL_ESTADO}
                        onChange={(e) => setRelleno({ ...newRelleno, RELL_ESTADO: Number(e.target.value) })}
                    >
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="regional">
                    <Form.Label>Relleno regional</Form.Label>
                    <Form.Control
                        as="select"
                        value={setRelleno.RELL_REGIONAL}
                        onChange={(e) => setRelleno({ ...newRelleno, RELL_REGIONAL: Number(e.target.value) })}
                    >
                        <option value="0">No</option>
                        <option value="1">Sí</option>
                    </Form.Control>
                </Form.Group>

              
            </form>
        </Modal.Body>

        <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleCloseModal}>Cerrar</button>
            <button className='btn btn-primary' onClick={handleSaveNewRelleno}>Guardar</button>
        </Modal.Footer>
    </Modal>  

  )
}
