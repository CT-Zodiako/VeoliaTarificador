import { useEffect, useState } from "react"
import { getUsuarios } from "../services/usuariosService"

export const SelectorUsuarios = () => {

    const [data, setData] = useState([])
    const [selectedUser, setSelectedUser] = useState('')


    const fetchData = async () => {
        try {
            const response = await getUsuarios();
            setData(response);

        } catch (error) {
            console.log('Error obteniendo los datos:', error)
        }
    }

    useEffect(() => {
      fetchData();
    
      
    }, [])

    console.log(data)

    const handleChange = (event) => {
        setSelectedUser(event.target.value);
      };
    
    


  return (
    <div className="col-3 mt-1">
        <label htmlFor="usuario">Usuario:</label>
        <select 
            className="form-select form-select-sm" 
            aria-label="Small select example" 
            value={selectedUser}
            onChange={handleChange}
        >
        <option value="" disabled>Seleccione un Usuario</option>
        {data.map((item) => (
            <option key={item.sisuId} value={item.sisuId}>
                {item.sisuCorreo}
            </option>
        ))}
        </select>

    </div>
  )
}
