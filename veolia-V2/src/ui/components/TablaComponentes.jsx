import { useState } from "react";
import { Table } from "react-bootstrap";
import { useStyleTablaComponent } from "../../hooks/useStyleTablaComponent";

 export const TablaComponentes = ({colums, data}) => {
  const {BackgroundColumn, onAjustarFecha} = useStyleTablaComponent();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const dataF = data.slice(indexOfFirstItem, indexOfLastItem);

return (
    <div className='componenTable'>
      <div className="acctionTable"/>
      <div className="tableBorde">
        <Table striped bordered hover style={{ fontSize: '2vh', overflowY: 'auto', minWidth: '10rem' }}>
          <thead>
            <tr>
              {colums &&
                colums.map((item, index) => (
                  <th key={index}>{item.head}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {dataF &&
              dataF.map((item, index) => (
                <tr key={index}>
                  {colums.map((body, colIndex) => (
                    <td 
                      style={{ background: BackgroundColumn(body.body, item[body.body]) }}
                      key={colIndex}
                    >
                      {body.body === 'TARI_FECHACREACION' ?
                        onAjustarFecha(item[body.body]) :
                        item[body.body]
                      }
                    </td>
                  ))}
                </tr>
              ))
            }
          </tbody>
        </Table>
        <div>
          <button 
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentPage(currentPage < Math.ceil(data.length / itemsPerPage) ? currentPage + 1 : currentPage)}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};