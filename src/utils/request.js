import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import { refreshToken } from '~/services/authService';

const request = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

// request.interceptors.request.use(
//     async (config) => {
//         const accessToken = localStorage.getItem('accessToken');
//         if (!!accessToken) {
//             let date = new Date();
//             const decodeToken = jwt_decode(accessToken);
//             if (decodeToken.exp < date.getTime() / 1000) {
//                 const data = await refreshToken();
//                 window.localStorage.setItem('accessToken', data.accessToken);
//                 config.headers['token'] = 'Bearer' + data.accessToken;
//             }
//         }
//         return config;
//     },
//     (err) => Promise.reject(err),
// );

request.interceptors.response.use((response) => response.data);

export default request;
