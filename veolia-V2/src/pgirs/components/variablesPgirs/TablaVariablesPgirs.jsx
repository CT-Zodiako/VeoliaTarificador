import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ModalVariablesPgirs } from "./ModalVariablesPgirs";
import { getVariablesPgirs } from "../../services/informePgirsService";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../../store/storeSelectors";

 export const TablaVariablesPgirs = () => {
  const aps = useApsSelector(state => state.aps);
  const anno = useAnnoSelector((state) => state.anno);
  const mes = useMesSelector((state) => state.mes);
  
  const [datos, setDatos] = useState([]);
  const [modal, setModal] = useState(false);
  const [variableEditar, setVariableEditar] = useState('');
  console.log('variableEditar', variableEditar);

  const meses = [
    {mes: 1, nombre: 'Enero'},
    {mes: 2, nombre: 'Febrero'},
    {mes: 3, nombre: 'Marzo'},
    {mes: 4, nombre: 'Abril'},
    {mes: 5, nombre: 'Mayo'},
    {mes: 6, nombre: 'Junio'},
    {mes: 7, nombre: 'Julio'},
    {mes: 8, nombre: 'Agosto'},
    {mes: 9, nombre: 'Septiembre'},
    {mes: 10, nombre: 'Octubre'},
    {mes: 11, nombre: 'Noviembre'},
    {mes: 12, nombre: 'Diciembre'}
  ];

  const variables = [
    {id: 11, nombre: 'LBL'},
    {id: 21, nombre: 'CESPED'},
    {id: 22, nombre: 'PODA'},
    {id: 23, nombre: 'LAVADO'},
    {id: 24, nombre: 'PLAYAS'},
    {id: 25, nombre: 'INSCESTAS'},
    {id: 26, nombre: 'MANCESTAS'}
  ];

  const frecuencias = [
    {id: 1, nombre: 'Mensual'},
    {id: 2, nombre: 'Semestral'},
    {id: 3, nombre: 'Anual'}
  ];

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
          frecuencia= {frecuencias}
          apss={aps}
          annos={anno}
          mess={mes}
        />
      </div>
    </>
  )
};