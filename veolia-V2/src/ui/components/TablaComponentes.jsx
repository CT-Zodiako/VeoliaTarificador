import { useEffect, useState } from "react";
import { useStyleTablaComponent } from "../../hooks/useStyleTablaComponent";
import { SelectPaginacionTabla } from "./SelectPaginacionTabla";

 export const TablaComponentes = ({colums, data, page}) => {
  const {BackgroundColumn, onAjustarFecha} = useStyleTablaComponent();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const dataF = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginacionTable = (pag) => {
    setItemsPerPage(pag)
  };

return (
    <div className='componenTable'>
      <div className="tableBorde">
        <div className="card-body">
          <div className="table-responsive" style={{ overflowY: 'auto', overflowX: 'auto' }}>
            <table className="table table-striped table-bordered custom-table">
              <thead>
                <tr className="text-center">
                  {colums &&
                    colums.map((item, index) => (
                      <th key={index}>{item.head}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                { page ? (
                  dataF && dataF.map((item, index) => (
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
                ) : (
                  data &&
                    data.map((item, index) => (
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
                )
                }
              </tbody>
            </table>
          </div>
          { page &&
          <div className="pagination-buttons">
            <button 
              onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)} 
              disabled={currentPage === 1}
            >
              ‹
            </button>
            <button 
              onClick={() => setCurrentPage(currentPage < Math.ceil(data.length / itemsPerPage) ? currentPage + 1 : currentPage)}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            >
              ›
            </button>
            <SelectPaginacionTabla paginacionTable={paginacionTable}/>
          </div>
          }
        </div>
      </div>
    </div>
  );
};