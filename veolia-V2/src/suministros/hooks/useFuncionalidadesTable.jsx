import { useCallback, useState } from "react";
import { useSelectStore } from "../../hooks/useSelectStore";

export const useFuncionalidadesTable = (dataPoda = null, ingresos = null, onEditarCostoPoda, fetchData) => {
    const { aps, anno, mes } = useSelectStore();
    
    const [editar, setEditar] = useState(null);
    const [podaEditar, setPodaEditar] = useState({
        CPTE_VALORSUI: '',
        APSA_ID: '',
        EMPR_EMPR: '',
        CPTE_ANNO: '',
        CPTE_MES: '',
    });

    const tipoIngreso = useCallback((ingreso) => {
        return ingresos.find((item) => item.id === ingreso).nombre;
    }, [dataPoda]);

    const onCostoPoda = (index) => {
        setPodaEditar({
            ...podaEditar,
            CPTE_VALORSUI: dataPoda[index].CPTE_VALORSUI,
            APSA_ID: aps,
            EMPR_EMPR: dataPoda[index].EMPR_EMPR,
            CPTE_ANNO: anno,
            CPTE_MES: mes,
        });        
        setEditar(index);
    };

    const onEditarSIU = (event) => {
        const {name, value} = event.target;
        setPodaEditar({
            ...podaEditar,
            [name]: value
        });
    };

    const onEditarPoda = async() => {
        try {
            await onEditarCostoPoda(podaEditar);
            await fetchData();
            setEditar(null);
        }
        catch (error) {
            console.error(error);
        }
    };

    const columnValorSui = (item, index) => {
        return editar === index ? (
            <input
                type="number"
                name='CPTE_VALORSUI'
                value={podaEditar.CPTE_VALORSUI}
                onChange={(event) => onEditarSIU(event)}
            />
         ) : 
        (
            <span>
                {item.CPTE_VALORSUI}
            </span> 
        );
    };

    const onAccionBoton = (index) => {
        return editar === index ? (
            <div>
                <button
                    className="btn btn-success"
                    onClick={onEditarPoda}
                >
                    Guardar
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => setEditar(null)}
                >
                    Cancelar
                </button>
            </div>
        )
        : (
            <div>
                <button
                    className="btn btn-warning"
                    onClick={() => onCostoPoda(index)}
                >
                    Editar
                </button>
            </div>
        );
    };

    return { tipoIngreso, columnValorSui, onAccionBoton };
};