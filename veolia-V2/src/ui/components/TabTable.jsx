import { useState } from 'react';

export const TabTable = ({ titulosTabs, onTabClick }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index, titulo) => {
        setActiveTab(index);
        onTabClick(index, titulo);
    };

    return (
        <div>
            <ul className="nav nav-tabs custom-tabs">
                {titulosTabs.map((tab, index) => (
                    <li key={index} className="nav-item">
                        <a 
                            onClick={() => handleTabClick(index, tab.titulo)} 
                            className={`nav-link custom-nav-link nav-tabs nav-links ${activeTab === index ? 'active-tab' : ''}`} 
                            aria-current="page"
                        >
                            {tab.titulo}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
