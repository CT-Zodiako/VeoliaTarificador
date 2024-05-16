import axios from 'axios';

export class Http {
    static async get(endPoint, params = {}) {
        try {
            const url = 'http://localhost:3000/api/';
            const token = localStorage.getItem('token');
            const response = await axios.get(`${url}${endPoint}`, {
                params,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    static async post(endPoint, data) {
        try {
            const url = 'http://localhost:3000/api/';
            const token = localStorage.getItem('token');
            const response = await axios.post(`${url}${endPoint}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    static async put(endPoint, data) {
        try {
            const url = 'http://localhost:3000/api/';
            const token = localStorage.getItem('token');
            const response = await axios.put(`${url}${endPoint}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    static async delete(endPoint) {
        try {
            const url = 'http://localhost:3000/api/';
            const token = localStorage.getItem('token');
            const response = await axios.delete(`${url}${endPoint}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    static async patch(endPoint, data) {
        try {
            const url = 'http://localhost:3000/api/';
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${url}${endPoint}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
