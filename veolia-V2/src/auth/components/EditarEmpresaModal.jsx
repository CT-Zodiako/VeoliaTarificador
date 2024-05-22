import { Form, Modal } from "react-bootstrap"

export const EditarEmpresaModal = ({
    selectedItem, handleCloseModal, handleSaveChanges, setSelectedItem 
}) => {
  return (
    <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">Id</label>
                <input type="text" className="form-control" id="id" value={selectedItem.EMPR_EMPR} readOnly/>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={selectedItem.EMPR_NOMBRE} 
                    onChange={(e) => setSelectedItem({ ...selectedItem, EMPR_NOMBRE: e.target.value })} 
                />
            </div>

            <div className="mb-3">
                <label htmlFor="nuap" className="form-label">Nuap</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="nuap" 
                    value={selectedItem.EMPR_NUAP} 
                    onChange={(e) => setSelectedItem({ ...selectedItem, EMPR_NUAP: e.target.value })}
                />
            </div>

            <Form.Group controlId="propio">
                <Form.Label>Propio</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.EMPR_PROPIA}
                    onChange={(e) => setSelectedItem({ ...selectedItem, EMPR_PROPIA: Num(e.target.value) })}
                >
                    <option value="0">Propio</option>
                    <option value="1">Terceros</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.EMPR_ESTADO}
                    onChange={(e) => setSelectedItem({ ...selectedItem, EMPR_ESTADO: e.target.value })}
                >
                    <option value="0">Inactivo</option>
                    <option value="1">Activo</option>
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
