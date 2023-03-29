import request from '~/utils/request';
import axios from 'axios';
import { register } from '~/redux/authSlice/registerSlice';
import { login } from '~/redux/authSlice/loginSlice';

export const userRegister = async (data, dispatch) => {
    try {
        const res = await request({
            method: 'POST',
            url: '/register',
            data: data,
        });
        dispatch(register(res));
    } catch (err) {
        console.log(err);
    }
};

export const authLogin = async (data, dispatch) => {
    try {
        const res = await request({
            method: 'POST',
            url: '/login',
            data: data,
        });
        localStorage.setItem('accessToken', res.accessToken);
        dispatch(login(res));
    } catch (err) {
        console.log(err);
    }
};

export const logOut = async (dispatch, navigate, accessToken) => {
    try {
        await request({
            method: 'POST',
            url: '/logout',
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        navigate('/login');
        dispatch(login(null));
        localStorage.clear();
    } catch (err) {
        console.log(err);
    }
};

export const refreshToken = async () => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/refresh`);
        return data;
    } catch (err) {
        console.log(err);
    }
};
