import { useState } from "react";

 export const SelectPaginacionTabla = ({paginacionTable}) => {
    const[pagina, setPagina] = useState(10);

    const paginas = [5, 10, 25, 30];

    const handleChange = (event) => {
        setPagina(event.target.value)
        paginacionTable(event.target.value);
    }

    return(
    <>
        <div className='mt-1'>
            <select 
                className="form-select form-select-sm" 
                aria-label="Small select example" 
                value={pagina} 
                onChange={handleChange}
            >
                {paginas.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
                ))}
            </select>
        </div>
    </>
  )
};