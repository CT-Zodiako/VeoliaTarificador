import { useEffect, useState } from "react";
import { useApsSelector, useDescripcion, useHorizonteDesde, useHorizonteHasta, useProyeccionesSelector } from "../../store/storeSelectors";
import { getProyec } from '../../informeProyecciones/service/informesProyeccionesService';
import { mesesAno } from "../../informeProyecciones/components/data";

 export const SelectProyecciones = () => {
    const aps = useApsSelector(state => state.aps);
    const selectedProy = useProyeccionesSelector(state => state.proy);
    const setSelectProyec = useProyeccionesSelector(state => state.cambioSelectorProyeciones);
    const setSelectedDescrip = useDescripcion(state => state.cambioDescripcion);
    const setHorizonteDesde = useHorizonteDesde(state => state.cambioHorizonteDesde);
    const setHorizonteHasta = useHorizonteHasta(state => state.cambioHorizonteHasta);

    const usr = localStorage.getItem("token");
    const tokenData = usr.split(".")[1];
    const decodedToken = JSON.parse(atob(tokenData));

    const sistema = decodedToken.idSistema;

    const [ proyecciones, setProyecciones ] = useState([]);
        
    const data = {
        APSA_ID : aps
    };

    if ( sistema === 1) {
        const getProyecciones = async() => {
            try {
                const responce = await getProyec(data);
                responce.map((item) => {
                    if(item.PROYID === selectedProy){
                        setSelectedDescrip(item.PROYDESCRIPCION);
                        setHorizonteDesde(`${optionMes(item.PROYMESDES)} / ${item.PROYANNODES}`);
                        setHorizonteHasta(`${optionMes(item.PROYMESHAS)} / ${item.PROYANNOHAS}`);
                    }
                })
                setProyecciones(responce);
            } catch {
                console.error('no se pudo realizar la consulta');    
            }
        };

        useEffect(() =>{
            if(aps){
                getProyecciones('');
            }
        }, [aps]);
    } else {
        const getReliquidacion = async() => {
            try {
                const responce = await getProyec(data);
                responce.map((item) => {
                    if(item.PROYID === selectedProy){
                        setSelectedDescrip(item.PROYDESCRIPCION);
                        setHorizonteDesde(`${optionMes(item.PROYMESDES)} / ${item.PROYANNODES}`);
                        setHorizonteHasta(`${optionMes(item.PROYMESHAS)} / ${item.PROYANNOHAS}`);
                    }
                })
                setProyecciones(responce);
            } catch {
                console.error('no se pudo realizar la consulta');    
            }
        };

        useEffect(() =>{
            if(aps){
                getReliquidacion('');
            }
        }, [aps]);
    }

    const handleChange = (event) => {
        setSelectProyec(event.target.value)
    };

    const optionMes = (mes) => {
        const mesAno = mesesAno.find(
            m => m.id === mes
        );
        return mesAno.meses;
    };

    useEffect(() => {
        if (proyecciones.length > 0 && selectedProy) {
            const foundItem = proyecciones.find((item) => item.PROYID === selectedProy);
            if (foundItem) {
                setSelectedDescrip(foundItem.PROYDESCRIPCION);
                setHorizonteDesde(`${optionMes(foundItem.PROYMESDES)} / ${foundItem.PROYANNODES}`);
                setHorizonteHasta(`${optionMes(foundItem.PROYMESHAS)} / ${foundItem.PROYANNOHAS}`);
            }
        }
    }, [selectedProy, proyecciones]);

    return(
    <>
        <div className='mt-1 container-select'>
            <label htmlFor="aps"className="label-select" >Proyecciones:</label>
            <select 
                className="form-select form-select-sm style-selector" 
                aria-label="Small select example" 
                value={selectedProy} 
                onChange={handleChange}
            >
                <option value="" >Selecionar Proyecciones</option>
                {proyecciones.map((item) => (
                <option key={item.PROYID} value={item.PROYID}>
                    {item.PROYNOMBRE}
                </option>
                ))}
            </select>
        </div>
    </>
  )
};