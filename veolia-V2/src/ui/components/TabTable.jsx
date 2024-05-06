import { TableCofiguracion } from './TableCofiguracion';

export const TabTable = ({ titulosTabs, onTabClick }) => {
    return (
        <div>
            <ul className="nav nav-tabs">
                {titulosTabs.map((tab, index) => (
                    <li key={index} className="nav-item">
                        <a onClick={() => onTabClick(index, tab.titulo)} className="nav-link" aria-current="page">{tab.titulo}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
