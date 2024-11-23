import { useEffect, useState } from 'react';
import { getSubCon, updateSubCon } from '../service/subsidiosContribucionesService';
import { Selectores } from '../../ui/components/Selectores';
import { TituloVista } from '../../ui/components/TituloVista';
import { ModalEditarSubCon, TablaSubCon } from '../components/subsidiosContribuciones';
import { useSelectStore } from '../../hooks/useSelectStore';
import { useFuncionalidadesSubCon } from '../hooks/useFuncionalidadesSubCon';

export const SubConPage = () => {
    const {anno, mes, aps, requestSubCon} = useSelectStore();
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { getClaseText } = useFuncionalidadesSubCon(data);
    
    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const onDataSubCon = async () => {
        try {
            const result = await getSubCon(requestSubCon);
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSave = async () => {
        try {
            await updateSubCon(data);
            handleShowModal();
        } catch (error) {
            console.error('Error guardando los datos:', error);
        }
    };

    const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    useEffect(() => {
        if (anno && mes && aps) {
            onDataSubCon();
        }
    }, [anno, mes, aps]);

    return (
        <>
            <div className="headerComponent">
                <div className="selector">
                    <TituloVista titulo="Porcentajes de Subsidios y Contribuciones" />
                </div>
                <div className="selector">
                    <Selectores selectorAps={true} selectorFecha={true} />
                </div>
            </div>
            <TablaSubCon data={data} handleShowModal={handleShowModal} getClaseText={getClaseText}/>
            <ModalEditarSubCon data={data} showModal={showModal}  handleCloseModal={handleShowModal} handleChange={handleChange} handleSave={handleSave}/>
        </>
    );
};