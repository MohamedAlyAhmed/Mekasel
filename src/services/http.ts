import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = import.meta.env.VITE_API_REST_API as string;

const http = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});

const onRequest = (
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    // Add any request modifications here
    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    // Handle request error here
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // Add any response modifications here
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

http.interceptors.request.use(onRequest, onRequestError);
http.interceptors.response.use(onResponse, onResponseError);

export default http;
