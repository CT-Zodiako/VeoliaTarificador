import { useEffect, useState } from "react";
import { useAnnoSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { getDashBoardSUI } from '../service/dashBoardService';
import { columnsDashBoardSUI } from '../components/data';
import { TablaComponentes } from "../../ui/components/TablaComponentes";
import { TituloVista } from "../../ui/components/TituloVista";
 
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
    };

    useEffect(() =>{
        if (anno && mess){
            dataTablaDashBoardSUI();
        } 
    }, [anno, mess]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Dashboard" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true}/>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className='width-Component'>
                <div className="panel">
                    <TablaComponentes colums={columnsDashBoardSUI} data={dataDashBoardSUI} page={true}/>
                </div>
            </div>
        </div>
    </>
  )
};