import { useEffect, useState } from "react";
import { columnsdashBoard } from '../components/data';
import { getDashboard } from '../service/DashBoardTarifasService';
import { Selectores } from "../../ui/components/Selectores";
import { TablaComponentes } from "../../ui/components/TablaComponentes";
import { useSelectStore } from "../../hooks/useSelectStore";
import { TituloVista } from "../../ui/components/TituloVista";
 
export const DashBoardTarifas = () => {
    const { anno, mes, requestAnnoMes } = useSelectStore();
    const [dataDashBoard, setDataDashBoard] = useState([]); 

    const dataTablasDashBoard = async() => {
        try{
            const dashBoard = await getDashboard(requestAnnoMes);
            setDataDashBoard(dashBoard);
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    };

    useEffect(()=> {
        if(anno && mes){
            dataTablasDashBoard();
        }
    }, [anno, mes]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Dashboard Tarifas" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className='width-Component'>
                <TablaComponentes colums={columnsdashBoard} data={dataDashBoard} page={true}/>
            </div>
        </div>
    </>
  )
};