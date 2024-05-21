import React from 'react'
import { Modal , Form} from 'react-bootstrap'

export const NewEmpresaModal = ({
    showNewModal, 
    handleCloseModal, 
    handleSaveNewEmpresa, 
    newEmpresa, 
    setEmpresa
}) => {
  return (
    <Modal show={showNewModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Nueva Empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='mb-3'>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        value={newEmpresa.EMPR_NOMBRE} 
                        onChange={(e) => setEmpresa({ ...newEmpresa, EMPR_NOMBRE: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="nuap">Nuap</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nuap" 
                        value={newEmpresa.EMPR_NUAP} 
                        onChange={(e) => setEmpresa({ ...newEmpresa, EMPR_NUAP: e.target.value })}
                    />
                </div>

                <Form.Group controlId="propio">
                        <Form.Label>Propio</Form.Label>
                        <Form.Control
                            as="select"
                            value={newEmpresa.EMPR_PROPIA}
                            onChange={(e) => setNewAps({ ...newEmpresa, EMPR_PROPIA: Number(e.target.value) })}
                        >
                            <option value="0">No</option>
                            <option value="1">Sí</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        as="select"
                        value={newEmpresa.EMPR_ESTADO}
                        onChange={(e) => setEmpresa({ ...newEmpresa, EMPR_ESTADO: e.target.value })}
                    >
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                    </Form.Control>
                </Form.Group>
            </form>
        </Modal.Body>
        <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button className="btn btn-primary" onClick={handleSaveNewEmpresa}>Guardar</button>
        </Modal.Footer>
    </Modal>
  )
}
