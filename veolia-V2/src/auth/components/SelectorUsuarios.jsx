import { useEffect, useState } from "react";
import { getUsuarios } from "../services/usuariosService";

export const SelectorUsuarios = ({ handleUsuarioAps }) => {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [filter, setFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const fetchData = async () => {
        try {
            const response = await getUsuarios();
            setData(response);
        } catch (error) {
            console.log('Error obteniendo los datos:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (user) => {
        setSelectedUser(user.sisuId);
        handleUsuarioAps(user.sisuId);
        setFilter('');
        setIsOpen(false);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.sisuCorreo.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
        <div className="col-4 mt-1 position-relative">
            <label htmlFor="usuario">Usuario:</label>
            <div 
                className="form-control form-control-sm" 
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer" }}
            >
                {selectedUser ? data.find(item => item.sisuId === selectedUser)?.sisuCorreo : "Seleccione un Usuario"}
            </div>
            {isOpen && (
                <div className="dropdown-menu show" style={{ padding: 0, width: '100%' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm mb-2"
                        placeholder="Filtrar usuarios..."
                        value={filter}
                        onChange={handleFilterChange}
                        style={{ position: 'sticky', top: 0, zIndex: 1 }}
                    />
                    <div style={{ maxHeight: '15rem', overflowY: 'auto', fontSize: '14px' }}>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <div 
                                    key={item.sisuId} 
                                    className="dropdown-item" 
                                    onClick={() => handleChange(item)}
                                >
                                    {item.sisuCorreo}
                                </div>
                            ))
                        ) : (
                            <div className="dropdown-item text-muted">No hay usuarios</div>
                        )}
                    </div>
                </div>
            )}
        </div>
        </>
    );
};
