import { useState } from 'react';
// import { TableRellenos } from "../components/TableRellenos";
import TableComponent from "../components/UsuarioTable";
import { PermisoPorAPS } from './PermisoPorAPS';
import { PermisoPorOpciones } from './PermisoPorOpciones';

export const UsuariosPage = () => {
  const [activeTab, setActiveTab] = useState('active-tab');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'active-tab' ? 'active' : ''}`}
            aria-current="page"
            href="#"
            onClick={() => handleTabClick('active-tab')}
          >
            Usuarios
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'link1-tab' ? 'active' : ''}`}
            href="#"
            onClick={() => handleTabClick('link1-tab')}
          >
            Permisos por APS
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'link2-tab' ? 'active' : ''}`}
            href="#"
            onClick={() => handleTabClick('link2-tab')}
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
        <div className={`tab-pane fade ${activeTab === 'link2-tab' ? 'show active' : ''}`} id="link2-tab">
          <PermisoPorOpciones />
        </div>
      </div>
    </div>
  );
};
