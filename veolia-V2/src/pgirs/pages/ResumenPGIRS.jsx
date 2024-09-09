import { Selectores } from "../../ui/components/Selectores";
import { TablaResumenPgirs } from "../components/resumenPgirs/TablaResumenPgirs";

 export const ResumenPGIRS = () => {
  return(
    <>
      <div>
        <div>
            <div className="tituloComponent">
              <h3>Resumen Variables PGIRS</h3>
            </div>
            <div className="selector">
              <Selectores selectorAps={true} />
            </div>
          </div>
          <div className="bodyComponent">
            <TablaResumenPgirs/>
          </div>
      </div>
    </>
  )
};