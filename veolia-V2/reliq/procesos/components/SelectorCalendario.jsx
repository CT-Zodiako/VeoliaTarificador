import { useState } from "react";

export const SelectorCalendario = () => {
  const fechaActual = new Date();
  const [anio, setAnio] = useState(fechaActual.getFullYear());
  const [mes, setMes] = useState(fechaActual.getMonth() + 1);
  const [dia, setDia] = useState(fechaActual.getDate());
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const anios = Array.from({ length: 31 }, (_, i) => 2000 + i);

  const meses = Array.from({ length: 12 }, (_, i) => i + 1);

  const obtenerDiasDelMes = (anio, mes) => new Date(anio, mes, 0).getDate();
  const dias = Array.from({ length: obtenerDiasDelMes(anio, mes) }, (_, i) => i + 1);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setMostrarOpciones(!mostrarOpciones)} style={{ padding: "10px", cursor: "pointer" }}>
        {`${anio}-${mes.toString().padStart(2, "0")}-${dia.toString().padStart(2, "0")}`}
      </button>

      {mostrarOpciones && (
        <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #ccc", padding: "10px" }}>
          <select value={anio} onChange={(e) => setAnio(parseInt(e.target.value))}>
            {anios.map((año) => (
              <option key={año} value={año}>{año}</option>
            ))}
          </select>

          <select value={mes} onChange={(e) => setMes(parseInt(e.target.value))}>
            {meses.map((mes) => (
              <option key={mes} value={mes}>{mes}</option>
            ))}
          </select>

          <select value={dia} onChange={(e) => setDia(parseInt(e.target.value))}>
            {dias.map((dia) => (
              <option key={dia} value={dia}>{dia}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};