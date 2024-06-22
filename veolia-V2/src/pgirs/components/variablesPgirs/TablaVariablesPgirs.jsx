import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ModalVariablesPgirs } from "./ModalVariablesPgirs";
import { getVariablesPgirs } from "../../services/informePgirsService";
import { meses, variables, frecuencias } from "../../../ui/components/datas";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../../store/storeSelectors";

 export const TablaVariablesPgirs = () => {
  const aps = useApsSelector(state => state.aps);
  const anno = useAnnoSelector((state) => state.anno);
  const mes = useMesSelector((state) => state.mes);
  
  const [datos, setDatos] = useState([]);
  const [modal, setModal] = useState(false);
  const [variableEditar, setVariableEditar] = useState('');
  console.log('variableEditar', variableEditar);

  const onAbrirModal = () => {
    setModal(true);
  }

  const onCerrarModal = () => {
    setModal(false);
  }

  const onMeseSeleccionado = (mes) => {
    if (!mes) return '';
      return meses.find(item => item.mes === mes).nombre;
  }

  const onVariableSeleccionada = (variable) => {
    if (!variable) return '';
    return variables.find(item => item.id === variable).nombre;
  }

  const onFrecuenciaSeleccionada = (frecuencia) => {
    if(!frecuencia) return '';
    return frecuencias.find((item) => item.id === frecuencia).nombre;
  }

  const onEditarFormulario = (item) => {
    setVariableEditar(item);
    onAbrirModal();
  }

  const fetchData = async () => {
    try {
      const response = await getVariablesPgirs(aps, anno, mes);
      setDatos(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[aps, anno, mes]);

  return(
    <>
      <div className='container'>
        <button
          onClick={onAbrirModal}
          className="btn btn-success"
          // disabled={datos.length === 0}
        >
          Nuevo
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>COD APS</th>
              <th>APS</th>
              <th>AÑO</th>
              <th>MES</th>
              <th>VARIABLE</th>
              <th>FRECUENCIA</th>
              <th>VALOR</th>
              <th>USUARIO</th>
              <th>FECHA INGRESO</th>
              <th>TIPO INGRESO</th>
              <th>OPCIONES</th>
            </tr>
          </thead>
          <tbody>
            { datos &&
              datos.map((item, index) => (
                <tr key={index}>
                  <td>{item.APSAID}</td>
                  <td>{item.APSA_NOMAPS}</td>
                  <td>{item.PGRIANNO}</td>
                  <td>{onMeseSeleccionado(item.PGRIMES)}</td>
                  <td>{onVariableSeleccionada(item.PGRIVARIABLE)}</td>
                  <td>{onFrecuenciaSeleccionada(item.PGRIFRECUENCIA)}</td>
                  <td>{item.PGRIVALOR}</td>
                  <td>{item.SISU_CORREO}</td>
                  <td>{item.PGRIFECHA}</td>
                  <td>{item.PGRINGRESO}</td>
                  <td>
                    <button 
                      className="btn btn-warning" 
                      onClick={() => onEditarFormulario(item)}
                    >
                      Editar
                    </button>
                    <button className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))              
            }
          </tbody>
        </Table>
        <ModalVariablesPgirs
          abrir={modal}
          handleCancelar={onCerrarModal}
          apss={aps}
          annos={anno}
          mess={mes}
        />
      </div>
    </>
  )
};