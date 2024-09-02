import { useEffect, useState } from "react";
import { useAnnoSelector, useMesSelector } from "../../store/storeSelectors";
import { columnsdashBoard } from '../components/data';
import { getDashboard } from '../service/DashBoardTarifasService';
import { Selectores } from "../../ui/components/Selectores";
import { TablaComponentes } from "../../ui/components/TablaComponentes";
 
export const DashBoardTarifas = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);

    const [dataDashBoard, setDataDashBoard] = useState([]);
    
    const data = {
        ANNO: anno,
        MES: mess
    }  

    const dataTablasDashBoard = async() => {
        try{
            const dashBoard = await getDashboard(data);
            setDataDashBoard(dashBoard);
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    }

    useEffect(()=> {
        if(anno && mess){
            dataTablasDashBoard();
        }
    }, [anno, mess])

    return(
    <>
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorFecha={true} />
            </div>
        </div>
        <div className="bodyComponent">
            <TablaComponentes colums={columnsdashBoard} data={dataDashBoard}/>
        </div>
    </>
  )
};