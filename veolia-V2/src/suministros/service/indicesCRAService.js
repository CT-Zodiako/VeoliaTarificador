import {Http} from '../../helpers/axiosHelper'


export const getIndicesCRA = async () => {
    try {
        const response = await Http.get('indice-cra/', {
                ANNO: 2025,
                MES: 1
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


export const crearIndicesCRA = async (nuevoIndiceCRA) => {
    try {
        const response = await Http.post('indice-cra/', nuevoIndiceCRA);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const actualizarIndicesCRA = async (datosEditIndice) => {
    try {
        const response = await Http.patch('indice-cra/', datosEditIndice);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}



