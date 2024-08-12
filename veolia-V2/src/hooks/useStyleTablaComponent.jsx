 export const useStyleTablaComponent = () => {
    const BackgroundColumn = (columna, dato) => {
      const columnasConFondo = ['F19', 'F23', 'F24', 'F35', 'F36', 'TARI_FECHACREACION'];

      const datoFila = columna === 'TARI_FECHACREACION' ? 
                                  (onAjustarFecha(dato)) :
                                  dato;

      const fechaRegex = columna === 'TARI_FECHACREACION' ?
                                    /^\d{4}-\d{2}-\d{2}$/ :
                                    /^\d{2}-\d{2}-\d{4}$/

      if (columnasConFondo.includes(columna) && datoFila === 'Pendiente') {
        return 'rgba(255, 0, 0, 0.2)'
      } 
      if (columnasConFondo.includes(columna) && datoFila === 'NO APLICA') {
        return 'rgba(0, 0, 0, 0.2)'
      }
      if (columnasConFondo.includes(columna) && fechaRegex.test(datoFila)) {
        return 'rgba(0, 255, 0, 0.2)'
      }                  
    }

    const onAjustarFecha = (fechaCompleta) => {
      const fecha = new Date(fechaCompleta);
      return fecha.toISOString().split('T')[0];
    }

    return { 
      BackgroundColumn, 
      onAjustarFecha
    }
};