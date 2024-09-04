import { useNavigate } from "react-router-dom";

 
export const CuadriculaCosto = ({ costoResult }) => {
    const navegate = useNavigate();

    const colores = [
        '#0d5ba8',
        '#db0000',
        '#83db00',
        '#ebc22f',
        '#9b00de',
        '#2ea39d',
        '#27b800',
        '#72a32e',
        '#ff028c',
        '#d6b20f',
    ];

    const navegar = (index) => {
        if (costoResult[index].NOMCOSTO === 'CLUS') {
            navegate('/costo');
        }
    };

    return(
        <div className="p-grid panel" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {costoResult.map((item, index) => (
          <div
            key={index}
            className="tarjeta p-dir-col"
            style={{
              backgroundColor: colores[index % 10],
              cursor: item.NOMCOSTO === 'CLUS' ? 'pointer' : 'default',
            }}
            onClick={() => navegar(index)}
          >
            <div id="top" className="p-col-align-start">
              <span>{item.NOMCOSTO}</span>
            </div>
            <div id="medio" className="p-align-center">
              <p>{parseFloat(item.VALOR.toFixed(2))}</p>
            </div>
            <div id="button" className="p-align-center">
              <small>% {parseFloat((item.VARIACION * 100).toFixed(2))}</small>
            </div>
          </div>
        ))}
      </div>
    );
};