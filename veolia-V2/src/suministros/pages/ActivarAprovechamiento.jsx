import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { SelectorAprovechamiento } from "../components/aprovechamiento/SelectorAprovechamiento";

 export const ActivarAprovechamiento = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);



  return(
    <>
        <Selectores selectorAps={true} selectorFecha={true} />
        <div className="d-flex justify-content-center" style={{ height: '100px' }}>
            <SelectorAprovechamiento/>
        </div>
    </>
  )
};