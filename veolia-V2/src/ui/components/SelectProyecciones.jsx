import { useEffect, useState } from "react";
import { 
    useApsSelector, useDescripcion, useHorizonteDesde, 
    useHorizonteHasta, useProyeccionesSelector, useReliquidacionSelector 
} from "../../store/storeSelectors";
import { getProyec } from '../../informeProyecciones/service/informesProyeccionesService';
import { getReliq } from '../../../reliq/procesos/services/ReliqudacionesServices';
import { mesesAno } from "../../informeProyecciones/components/data";

export const SelectProyecciones = () => {
    const aps = useApsSelector(state => state.aps);
    
    const selectedProy = useProyeccionesSelector(state => state.proy);
    const setSelectProyec = useProyeccionesSelector(state => state.cambioSelectorProyeciones);

    const selectedReliq = useReliquidacionSelector(state => state.reliq);
    const setSelectReliq = useReliquidacionSelector(state => state.cambioSelectorReliq);

    const setSelectedDescrip = useDescripcion(state => state.cambioDescripcion);
    const setHorizonteDesde = useHorizonteDesde(state => state.cambioHorizonteDesde);
    const setHorizonteHasta = useHorizonteHasta(state => state.cambioHorizonteHasta);
    const [proyecciones, setProyecciones] = useState([]);

    const usr = localStorage.getItem("token");
    const tokenData = usr ? usr.split(".")[1] : null;
    const decodedToken = tokenData ? JSON.parse(atob(tokenData)) : {};
    const sistema = decodedToken.idSistema || 1;

    const getProyecciones = async () => {
        if (!aps) return;
        try {
            const data = { APSA_ID: aps };
            const response = await getProyec(data);
            setProyecciones(response);

            const foundItem = response.find(item => item.PROYID === selectedProy);
            if (foundItem) {
                setSelectedDescrip(foundItem.PROYDESCRIPCION);
                setHorizonteDesde(`${optionMes(foundItem.PROYMESDES)} / ${foundItem.PROYANNODES}`);
                setHorizonteHasta(`${optionMes(foundItem.PROYMESHAS)} / ${foundItem.PROYANNOHAS}`);
            }
        } catch {
            console.error('No se pudo realizar la consulta de proyecciones.');
        }
    };

    const getReliquidacion = async () => {
        if (!aps) return;
        try {
            const data = { apsId: aps };
            const response = await getReliq(data);
            setProyecciones(response);

            const foundItem = response.find(item => item.relqid === selectedReliq);
            if (foundItem) {
                setSelectedDescrip(foundItem.relqdescrip);
                setHorizonteDesde(separarFecha(foundItem.relqdesde));
                setHorizonteHasta(separarFecha(foundItem.relqhasta));
            }
        } catch {
            console.error('No se pudo realizar la consulta de reliquidaciones.');
        }
    };

    useEffect(() => {
        if (sistema === 1) {
            getProyecciones();
        } else {
            getReliquidacion();
        }
    }, [aps, sistema]);

    useEffect(() => {
        if (proyecciones.length === 0) return;

        const foundItem = sistema === 1
            ? proyecciones.find(item => item.PROYID === selectedProy)
            : proyecciones.find(item => item.relqid === selectedReliq);

        if (foundItem) {
            setSelectedDescrip(sistema === 1 ? foundItem.PROYDESCRIPCION : foundItem.relqdescrip);
            setHorizonteDesde(sistema === 1 
                ? `${optionMes(foundItem.PROYMESDES)} / ${foundItem.PROYANNODES}`
                : separarFecha(foundItem.relqdesde)
            );
            setHorizonteHasta(sistema === 1 
                ? `${optionMes(foundItem.PROYMESHAS)} / ${foundItem.PROYANNOHAS}`
                : separarFecha(foundItem.relqhasta)
            );
        }
    }, [selectedProy, selectedReliq, proyecciones, sistema]);

    const handleChange = (event) => {
        if (sistema === 1) {
            setSelectProyec(event.target.value);
        } else {
            setSelectReliq(event.target.value);
        }
    };

    const optionMes = (mes) => {
        const mesEncontrado = mesesAno.find(m => m.id === mes);
        return mesEncontrado ? mesEncontrado.meses : 'Desconocido';
    };

    const separarFecha = (fecha) => {
        const fechaStr = fecha.toString();
        const anio = fechaStr.slice(0, 4);
        const mes = fechaStr.slice(4, 6);
        const mesEncontrado = mesesAno.find(m => m.id == mes);
        return `${mesEncontrado.meses} / ${anio}`;
    };

    return (
        <div className='mt-1 container-select'>
            <label htmlFor="aps" className="label-select">
                {sistema === 1 ? 'Proyecciones' : 'Reliquidaciones'}: 
            </label>
            <select 
                className="form-select form-select-sm style-selector" 
                aria-label="Small select example" 
                value={sistema === 1 ? selectedProy : selectedReliq}
                onChange={handleChange}
            >
                <option value="">Seleccionar {sistema === 1 ? 'Proyecciones' : 'Reliquidaciones'}</option>
                {proyecciones.map((item) => (
                    <option key={sistema === 1 ? item.PROYID : item.relqid} value={sistema === 1 ? item.PROYID : item.relqid}>
                        {sistema === 1 ? item.PROYNOMBRE : item.relqnombre}
                    </option>
                ))}
            </select>
        </div>
    );
};