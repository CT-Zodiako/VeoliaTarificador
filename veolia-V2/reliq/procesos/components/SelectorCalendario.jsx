import { useState, useRef, useEffect } from "react";

export const SelectorCalendario = () => {
  const fechaActual = new Date();
  const [anio, setAnio] = useState(fechaActual.getFullYear());
  const [mes, setMes] = useState(fechaActual.getMonth());
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const refCalendario = useRef(null);

  const diasSemana = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
  const obtenerDiasDelMes = (anio, mes) => new Date(anio, mes + 1, 0).getDate();
  const primerDiaSemana = new Date(anio, mes, 1).getDay();

  const cambiarMes = (incremento) => {
    const nuevoMes = mes + incremento;
    if (nuevoMes < 0) {
      setMes(11);
      setAnio(anio - 1);
    } else if (nuevoMes > 11) {
      setMes(0);
      setAnio(anio + 1);
    } else {
      setMes(nuevoMes);
    }
  };

  const seleccionarHoy = () => {
    setAnio(fechaActual.getFullYear());
    setMes(fechaActual.getMonth());
    setDiaSeleccionado(fechaActual.getDate());
  };

  const limpiarSeleccion = () => {
    setDiaSeleccionado(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refCalendario.current && !refCalendario.current.contains(event.target)) {
        setMostrarCalendario(false);
      }
    };

    if (mostrarCalendario) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mostrarCalendario]);

  return (
    <div style={{ position: "relative", display: "inline-block", display: 'flex', flexDirection: 'column', paddingTop: '0.4rem' }} ref={refCalendario} className="mt-1 container-select">
        <label className='label-select'>Fecha: </label>
      <button 
        className="form-select-sm style-selector"
        onClick={() => setMostrarCalendario(!mostrarCalendario)} 
        style={{ padding: "10px", cursor: "pointer", width: "260px", fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.3)", border: "1px solid rgba(179, 179, 179, 0.5)", }}
      >
        {diaSeleccionado ? `${anio}-${(mes + 1).toString().padStart(2, "0")}-${diaSeleccionado.toString().padStart(2, "0")}` : "Seleccionar Fecha"}
      </button>

      {mostrarCalendario && (
        <div style={{
          position: "absolute", top: "100%", left: 0, background: "#1c1e26",
          borderRadius: "8px", padding: "10px", width: "260px",
          color: "#fff", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <button onClick={() => cambiarMes(-1)} style={{ background: "none", border: "none", color: "#fff", fontSize: "18px" }}>←</button>
            <span>{new Date(anio, mes).toLocaleString("en-US", { month: "long", year: "numeric" })}</span>
            <button onClick={() => cambiarMes(1)} style={{ background: "none", border: "none", color: "#fff", fontSize: "18px" }}>→</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: "5px" }}>
            {diasSemana.map((dia, index) => (
              <div key={index} style={{ fontWeight: "bold", padding: "5px" }}>{dia}</div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" }}>
            {Array.from({ length: primerDiaSemana }).map((_, index) => (
              <div key={`empty-${index}`} style={{ visibility: "hidden" }}>00</div>
            ))}
            {Array.from({ length: obtenerDiasDelMes(anio, mes) }, (_, i) => i + 1).map((dia) => (
              <button
                key={dia}
                onClick={() => setDiaSeleccionado(dia)}
                style={{
                  padding: "5px", background: diaSeleccionado === dia ? "#007bff" : "transparent",
                  border: "1px solid #555", borderRadius: "5px", color: "#fff", cursor: "pointer"
                }}
              >
                {dia}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
            <button onClick={seleccionarHoy} style={{ padding: "5px 10px", background: "#007bff", border: "none", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>Today</button>
            <button onClick={limpiarSeleccion} style={{ padding: "5px 10px", background: "#444", border: "none", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>Clear</button>
            <button onClick={() => setMostrarCalendario(false)} style={{ padding: "5px 10px", background: "red", border: "none", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
