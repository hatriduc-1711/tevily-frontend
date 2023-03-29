import request from '~/utils/request';
import { allAdmin, allUsers, addAdmin, updateAdmin } from '~/redux/adminSlice/adminSlice';
import { allTours, addTour } from '~/redux/tourSlice/tourSlice';

export const getAllAdmins = async (dispatch, accessToken) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getAllAdmins',
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(allAdmin(res));
    } catch (err) {
        console.log(err);
    }
};

export const getAllUsers = async (dispatch, accessToken) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getAllUsers',
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(allUsers(res));
    } catch (err) {
        console.log(err);
    }
};

export const getAllTours = async (dispatch, accessToken) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getAllTours',
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(allTours(res));
    } catch (err) {
        console.log(err);
    }
};

export const CreateAdmin = async (data, dispatch, accessToken) => {
    try {
        const res = await request({
            method: 'POST',
            url: '/addAdmin',
            data: data,
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(addAdmin(res));
    } catch (err) {
        console.log(err);
    }
};

export const CreateTour = async (data, dispatch, accessToken) => {
    try {
        const res = await request({
            method: 'POST',
            url: '/addTour',
            data: data,
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(addTour(res));
    } catch (err) {
        console.log(err);
    }
};

export const UpdateAdmin = async (data, dispatch, accessToken) => {
    try {
        const res = await request({
            method: 'PUT',
            url: '/updateAdmin',
            data: data,
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(updateAdmin(res));
    } catch (err) {
        console.log(err);
    }
};

export const DeleteAdmin = async (data, accessToken) => {
    try {
        await request({
            method: 'DELETE',
            url: '/deleteAdmin',
            data: data,
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const DeleteUser = async (data, accessToken) => {
    try {
        await request({
            method: 'DELETE',
            url: '/deleteUser',
            data: data,
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const DeleteTour = async (data, accessToken) => {
    try {
        await request({
            method: 'DELETE',
            url: '/deleteTour',
            data: data,
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
    } catch (err) {
        console.log(err);
    }
};
