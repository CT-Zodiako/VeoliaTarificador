import { useState } from 'react'
import { TablePgirs } from '../components/infromePgirs/TablePgirs'
import { TablaBarrido } from '../components/infromePgirs/TableBarrido'
import { Selectores } from '../../ui/components/Selectores'
import { TabTable } from '../../ui/components/TabTable'
import { TituloVista } from '../../ui/components/TituloVista'

export const InformePGIRSPage = () => {
  const [pestañaActiva, setPestañaActiva] = useState(0); 
  const [titulo, setTitulo] = useState('Clus')

  const titulosTabs = [
    { titulo: 'Clus' },
    { titulo: 'Barrido' },
  ];

  const handleClickTab = (index, titulo) => {
    setPestañaActiva(index);
    setTitulo(titulo)
  };

  return (
    <>
        <div className="headerComponent">
          <div className="selector">
              <TituloVista titulo="Informe PGIRS" />
          </div>
          <div className="selector">
            <Selectores selectorAps={true} />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
              <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
              <div className="panel">
                { titulo === 'Clus' ? (<TablePgirs />) : (<TablaBarrido />)}
              </div>
          </div>
        </div>
    </>
  )
}
