import { Selectores } from "../../ui/components/Selectores";
import { TablaResumenPgirs } from "../components/resumenPgirs/TablaResumenPgirs";

 export const ResumenPGIRS = () => {
  return(
    <>
      <div className="headerComponent">
        <div className="tituloComponent"/>
        <div className="selector">
          <Selectores selectorAps={true} />
        </div>
      </div>
      <div className="bodyComponent">
        <TablaResumenPgirs/>
      </div>
    </>
  )
};