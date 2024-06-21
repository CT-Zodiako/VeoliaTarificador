import { Selectores } from "../../ui/components/Selectores";
import { TablaResumenPgirs } from "../components/resumenPgirs/TablaResumenPgirs";

 export const ResumenPGIRS = () => {
  return(
    <>
        <Selectores selectorAps={true} />
        <TablaResumenPgirs/>
    </>
  )
};