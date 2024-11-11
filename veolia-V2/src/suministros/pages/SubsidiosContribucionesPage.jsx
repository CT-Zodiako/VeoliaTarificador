import { useCallback, useEffect, useState } from 'react';
import { getSubCon, updateSubCon } from '../service/subsidiosContribucionesService';
import { Selectores } from '../../ui/components/Selectores';
import { TituloVista } from '../../ui/components/TituloVista';
import { ModalEditarSubCon, TablaSubCon } from '../components/subsidiosContribuciones';
import { useSelectStore } from '../../hooks/useSelectStore';

export const SubConPage = () => {
    const {anno, mes, aps, dataSubCon} = useSelectStore();

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const onDataSubCon = async () => {
        try {
            const result = await getSubCon(dataSubCon);
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (anno && mes && aps) {
            onDataSubCon();
        }
    }, [anno, mes, aps]);

    const handleShowModal = () => {
        setShowModal(!showModal);
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

    const getClaseText = useCallback((clase) => {
        switch (clase) {
            case 1:
                return 'Estrato 1';
            case 2:
                return 'Estrato 2';
            case 3:
                return 'Estrato 3';
            case 4:
                return 'Estrato 4';
            case 5:
                return 'Estrato 5';
            case 6:
                return 'Estrato 6';
            case 7:
                return 'Comercial';
            case 8:
                return 'Industrial';
            case 9:
                return 'Oficial';
            default:
                return 'Desconocido';
        }
    }, [data]);
    
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