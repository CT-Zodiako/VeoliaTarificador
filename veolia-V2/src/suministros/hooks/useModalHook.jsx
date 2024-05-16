import { useState } from 'react'

export const modalHook = (inicial={}) => {
    const [data, setData] = useState(inicial)
    console.log(data)

    const estadoInputs = (evento, name) => {
        setData({
            ...data,
            [name]: evento.target.value
        })
    }

    const prepararDatosParaBackend = () => {
        // Construir un array de objetos en el formato requerido
        const datosParaBackend = Object.keys(data).map(key => ({
            
            ANNO: 2025, // Ajustar el valor del año según sea necesario
            MES: 1, // Ajustar el valor del mes según sea necesario
            VALOR: data[key], // El valor del campo del formulario
            PARA_INDICES20011: key === 'ipc' ? 1 : key === 'smlv' ? 2 : key === 'ipcc' ? 3 : key === 'ioexp' ? 4 : 0
        }));
        return datosParaBackend;
    };
  return {
        data,
        estadoInputs,
        setData,
        prepararDatosParaBackend 
  }
}
