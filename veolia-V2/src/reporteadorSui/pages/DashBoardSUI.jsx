import { useEffect, useState } from "react";
import { useAnnoSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import {  getDashBoardSUI } from '../service/dashBoardService';
import { columnsDashBoardSUI } from '../components/data';
import { TablaComponentes } from "../../ui/components/TablaComponentes";
 
export const DashBoardSUI = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);

    const [dataDashBoardSUI, setDataDashBoardSUI] = useState([]);
    
    const data = {
        ANNO: anno,
        MES: mess
    }

    const dataTablaDashBoardSUI = async() => {
        try{
            const dashBoard = await getDashBoardSUI(data);
            setDataDashBoardSUI(dashBoard)
        } catch {
            console.error('error en data dashBoard SUI');
        }
    }

    useEffect(() =>{
        if (anno && mess){
            dataTablaDashBoardSUI();
        } 
    }, [anno, mess]);

    return(
    <>
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorFecha={true}/>
            </div>
        </div>
        <div className="bodyComponent" >
            <TablaComponentes colums={columnsDashBoardSUI} data={dataDashBoardSUI} />
        </div>
    </>
  )
};