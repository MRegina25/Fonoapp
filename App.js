import React, { useState } from 'react';

const pacientes = [
  { id: 1, nombre: "Martina", diagnostico: "Trastorno fonológico" },
  { id: 2, nombre: "Nahuel", diagnostico: "Sordera prelingüística" },
  { id: 3, nombre: "Joaquín", diagnostico: "Retraso del lenguaje" },
];

const progresos = {
  Martina: [{ mes: "Marzo 2025", resumen: "Trabajó articulación de /s/ y /f/, juegos de soplo." }],
  Nahuel: [{ mes: "Marzo 2025", resumen: "Identificación de sílabas simples." }],
  Joaquín: [{ mes: "Marzo 2025", resumen: "Comenzó uso de frases simples." }]
};

export default function App() {
  const [vista, setVista] = useState("fono");
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h1>{vista === "fono" ? "Panel del Fonoaudiólogo" : "Panel de Padres"}</h1>
        <button onClick={() => setVista(vista === "fono" ? "padres" : "fono")}>
          Cambiar vista
        </button>
      </div>

      {vista === "fono" ? (
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <h2>Pacientes</h2>
            {pacientes.map((p) => (
              <div key={p.id} style={{ marginBottom: '1rem', background: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
                <strong>{p.nombre}</strong>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>{p.diagnostico}</p>
                <button onClick={() => setPacienteSeleccionado(p.nombre)}>Ver ficha</button>
              </div>
            ))}
          </div>

          <div style={{ flex: 1 }}>
            {pacienteSeleccionado ? (
              <div>
                <h2>Ficha de {pacienteSeleccionado}</h2>
                {(progresos[pacienteSeleccionado] || []).map((p, index) => (
                  <div key={index} style={{ background: '#fff', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                    <strong>{p.mes}</strong>
                    <p>{p.resumen}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Seleccioná un paciente para ver su ficha.</p>
            )}
          </div>
        </div>
      ) : (
        <div>
          {pacientes.map((p) => (
            <div key={p.id} style={{ background: '#fff', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <strong>{p.nombre}</strong>
              {(progresos[p.nombre] || []).map((prog, index) => (
                <div key={index}>
                  <p><strong>{prog.mes}</strong></p>
                  <p>{prog.resumen}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}