import { Selectores } from "../../ui/components/Selectores";

 export const Costo = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);


    return(
    <>
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <div className="bodyComponent" >
            {/* <TablaComponentes colums={columnsDashBoardSUI} data={dataDashBoardSUI} /> */}
        </div>
    </>
  )
};