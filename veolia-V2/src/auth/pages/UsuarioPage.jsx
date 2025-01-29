import { useState } from 'react';
// import { TableRellenos } from "../components/TableRellenos";
import TableComponent from "../components/UsuarioTable";
import { PermisoPorAPS } from './PermisoPorAPS';
import { PermisoPorOpciones } from './PermisoPorOpciones';
import { PermisosPorSistema } from './PermisosPorSistema';

export const UsuariosPage = () => {
  const [activeTab, setActiveTab] = useState('active-tab');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: '0', margin: '0' }}>
      <li>
        <a
          style={{
            display: 'block',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: activeTab === 'active-tab' ? '#007bff' : 'transparent',
            color: activeTab === 'active-tab' ? '#fff' : '#007bff',
            textDecoration: 'none',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          href="#"
          onClick={() => handleTabClick('active-tab')}
        >
          Usuarios
        </a>
      </li>
      <li>
        <a
          style={{
            display: 'block',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: activeTab === 'link1-tab' ? '#007bff' : 'transparent',
            color: activeTab === 'link1-tab' ? '#fff' : '#007bff',
            textDecoration: 'none',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          href="#"
          onClick={() => handleTabClick('link1-tab')}
        >
          Permisos por APS
        </a>
      </li>
      <li>
        <a
          style={{
            display: 'block',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: activeTab === 'link2-tab' ? '#007bff' : 'transparent',
            color: activeTab === 'link2-tab' ? '#fff' : '#007bff',
            textDecoration: 'none',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          href="#"
          onClick={() => handleTabClick('link2-tab')}
        >
          Permisos por Sistema
        </a>
      </li>
      <li>
        <a
          style={{
            display: 'block',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: activeTab === 'link3-tab' ? '#007bff' : 'transparent',
            color: activeTab === 'link3-tab' ? '#fff' : '#007bff',
            textDecoration: 'none',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          href="#"
          onClick={() => handleTabClick('link3-tab')}
        >
          Permisos por Opciones
        </a>
      </li>
    </ul>
      <div className="tab-content mt-3">
        <div className={`tab-pane fade ${activeTab === 'active-tab' ? 'show active' : ''}`} id="active-tab">
          <TableComponent />
        </div>
        <div className={`tab-pane fade ${activeTab === 'link1-tab' ? 'show active' : ''}`} id="link1-tab">
          <PermisoPorAPS />
        </div>
        <div className={`tab-pane fade ${activeTab === 'link2-tab' ? 'show active' : ''}`} id="link1-tab">
          <PermisosPorSistema />
        </div>
        <div className={`tab-pane fade ${activeTab === 'link3-tab' ? 'show active' : ''}`} id="link2-tab">
          <PermisoPorOpciones />
        </div>
      </div>
    </div>
  );
};
