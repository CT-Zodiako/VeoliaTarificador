import { useState } from 'react';

export const TabTable = ({ titulosTabs, onTabClick }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index, titulo) => {
        setActiveTab(index);
        onTabClick(index, titulo);
    };

    return (
        <div className="mb-2 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-semibold text-center" role="tablist">
                {titulosTabs.map((tab, index) => (
                    <li key={index} className="me-2" role="presentation">
                        <button
                            onClick={() => handleTabClick(index, tab.titulo)}
                            className={`inline-block p-4 border-b-2 rounded-t-lg h-[4rem]
                            ${activeTab === index
                                    ? "text-red-600 hover:text-red-600 border-red-600"
                                    : "text-gray-500 hover:text-gray-600 border-gray-200 hover:border-gray-300"
                            }`}
                            role="tab"
                            aria-selected={activeTab === index}
                        >
                            {tab.titulo}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
