import { ApsSelector } from '../../ui/components/ApsSelector.jsx';
import { FechaSelector } from '../../ui/components/FechaSelector.jsx';

export const Selectores = ({ selectorAps = false, selectorFecha = false }) => {
    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="card col-10">
                <div className="card-body d-flex justify-content-between gap-5 align-items-start">
                    {selectorAps && <ApsSelector />}
                    {selectorFecha && <FechaSelector />}
                </div>
            </div>
        </div>
    )
}
