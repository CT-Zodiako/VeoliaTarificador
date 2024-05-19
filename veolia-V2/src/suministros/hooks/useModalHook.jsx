import { useState } from 'react'
import { useAnnoSelector, useMesSelector } from '../../store/storeSelectors'

export const modalHook = (inicial={}) => {
    const [data, setData] = useState(inicial)
    const anno = useAnnoSelector(state => state.anno)
    const mes = useMesSelector(state => state.mes)

    const estadoInputs = (evento, name) => {
        setData({
            ...data,
            [name]: evento.target.value
        })
    }
    console.log("midata",data)

    const prepararDatosParaBackend = () => {
        // Construir un array de objetos en el formato requerido
        const datosParaBackend = Object.keys(data).map(key => ({
            
            ANNO: anno, // Ajustar el valor del año según sea necesario
            MES: mes, // Ajustar el valor del mes según sea necesario
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
