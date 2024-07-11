import { Http } from "../../helpers/axiosHelper";

export const getDescuentoCosto = async (data) => {
    try {
        const response = await Http.get('descuentos-costos', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getSelectDescuentoCosto = async (data) => {
    try {
        const response = await Http.get('descuentos-costos/selector-new-descuento', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postDescuentoCosto = async (data) => {
    try {
        const response = await Http.post('descuentos-costos', data);
        console.log('se creo el descuento costo');
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const patchDescuentoCosto = async (data) => {
    try {
        const response = await Http.patch('descuentos-costos', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


