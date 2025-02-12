import { useEffect } from "react";
import { SelectPaginacionTabla } from "./SelectPaginacionTabla";

export const PaginacionTablas = ({ data, currentPage, setCurrentPage, itemsPerPage, paginacionTable, indexOfLastItem, indexOfFirstItem }) => {    
    const totalItems = data.length;
    const showingStart = totalItems === 0 ? 0 : indexOfFirstItem + 1;
    const showingEnd = Math.min(indexOfLastItem, totalItems);
    
    useEffect(() => {
      setCurrentPage(1);
    }, [data, itemsPerPage]);

    return(
    <>
        <nav 
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 
            py-[10px] px-[16px] bg-gray-100" 
            aria-label="Table navigation"
        >
            <span className="flex items-center space-x-1 text-sm font-normal text-gray-700 gap-x-3">
              Mostrando{' '}
              <SelectPaginacionTabla paginacionTable={paginacionTable}/>
              <span className="font-semibold text-gray-900">
                {showingStart}-{showingEnd}
              </span>{' '}
              de{' '}
              <span className="font-semibold text-gray-900">{totalItems}</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                  <a 
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300
                    hover:bg-gray-100 hover:text-gray-700"
                    onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                    disabled={currentPage === 1}
                  >
                      <span className="sr-only">Previous</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                  </a>
              </li>
              {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => (
                <li key={index}>
                  <a
                    className={`flex items-center justify-center text-sm py-2 px-3 leading-tight font-bold
                    ${currentPage === index + 1 ? 'text-primary-600 bg-primary-50 border-primary-300' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li>
                  <a 
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    onClick={() => setCurrentPage(currentPage < Math.ceil(data.length / itemsPerPage) ? currentPage + 1 : currentPage)}
                    disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                    >
                      <span className="sr-only">Next</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                  </a>
              </li>
            </ul>
        </nav>
    </>
  )
};