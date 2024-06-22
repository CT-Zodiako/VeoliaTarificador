import { useState } from "react";
import { Table } from "react-bootstrap";
import { ModalVariablesPgirs } from "./ModalVariablesPgirs";
import { meses, variables, frecuencias } from "../../../ui/components/datas";
import { SelectorFrecuenciaEditar } from "./SelectorFrecuenciaEditar";
import { updateVariablesPgirs } from "../../services/informePgirsService";

 export const TablaVariablesPgirs = ({aps, anno, mes, datos, fetchData}) => {
  const [modal, setModal] = useState(false);
  const [editar, setEditar] = useState(null);
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

  const onEditarFormulario = (index) => {
    setVariableEditar(datos[index]);
    setEditar(index);
  }

  const onCancelarEditar = () => {
    setVariableEditar('');
    setEditar(false);
  }

  const onEditarVariable = (event) => {
    const {name, value} = event.target;
    setVariableEditar({
      ...variableEditar,
      [name]: value
    });
  }

  const onActualizarVariable = async () => {
    try {
      await updateVariablesPgirs(variableEditar);
    }
    catch (error) {
      console.error(error);
    } 
    fetchData();
    setVariableEditar('');
    setEditar(null);
  }

  return(
    <>
      <div className='container'>
        <button
          onClick={onAbrirModal}
          className="btn btn-success"
          disabled={datos && datos.length > 0 ? true : false}
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
              <th style={{ width: '200px' }}>OPCIONES</th>
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
                  <td>
                    {
                      editar === index ? (
                        <div>
                          <SelectorFrecuenciaEditar
                            label={variableEditar.PGRIFRECUENCIA}
                            onEditarVariable={onEditarVariable}
                          />
                        </div>
                      )
                      : (
                        <div>
                          {onFrecuenciaSeleccionada(item.PGRIFRECUENCIA)}
                        </div>
                      )
                    }
                  </td>
                  <td>
                    {
                      editar === index ? (<div>
                        <input 
                          type="text"
                          name="PGRIVALOR"
                          value={variableEditar.PGRIVALOR || ''}
                          onChange={(event) => onEditarVariable(event, index)}
                        />
                      </div>) 
                      : (<div>{item.PGRIVALOR}</div>)
                    }
                  </td>
                  <td>{item.SISU_CORREO}</td>
                  <td>{item.PGRIFECHA}</td>
                  <td>{item.PGRINGRESO}</td>
                  <td className="d-flex justify-content-center align-items-center" style={{ width: '200px' }}>
                    {
                      editar === index ? (
                        <div>
                          <button 
                            className="btn btn-success"
                            onClick={onActualizarVariable}
                          >
                            Guardar
                          </button>
                          <button 
                            className="btn btn-danger"
                            onClick={onCancelarEditar}
                          >
                            cancelar
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button 
                            className="btn btn-warning"
                            onClick={() => onEditarFormulario(index)}
                          >
                            Editar
                          </button>
                        </div>
                      )
                    }
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