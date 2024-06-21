import { Selectores } from "../../ui/components/Selectores";
import { TablaVariablesPgirs } from "../components/variablesPgirs/TablaVariablesPgirs";

 export const VariablesPGIRS = () => {
  return(
    <>
        <Selectores selectorAps={true} selectorFecha={true} />
        <TablaVariablesPgirs/>
    </>
  )
};