import { useState } from 'react'
import { TablePgirs } from '../components/infromePgirs/TablePgirs'
import { TablaBarrido } from '../components/infromePgirs/TableBarrido'
import { Selectores } from '../../ui/components/Selectores'
import { TabTable } from '../../ui/components/TabTable'

export const InformePGIRSPage = () => {
  const [pestañaActiva, setPestañaActiva] = useState(0); 
  const [titulo, setTitulo] = useState('')

  const titulosTabs = [
    {titulo: 'Clus'},
    {titulo: 'Barrido'},
  ];

  const handleClickTab = (index, titulo) => {
    setPestañaActiva(index);
    setTitulo(titulo)
  };
  return (
    <div>
        <Selectores selectorAps={true} />
        <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
        {titulo === 'Clus' ? (<TablePgirs />) : (<TablaBarrido />)}
    </div>
  )
}
