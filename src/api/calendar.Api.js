import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

//En este caso se crea una instancia, y esta instancia es la que se utiliza para todas las peticiones axios a la API de backend
export const calendarApi = axios.create({
    baseURL: VITE_API_URL,
});

//Todo: configurar Interceptores
calendarApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    };
    return config;
});

//export default calendarApi;
