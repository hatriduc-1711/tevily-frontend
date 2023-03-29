import request from '~/utils/request';
import { toursClient, tourSearch, tour } from '~/redux/tourSlice/tourSlice';
import config from '~/config';

export const getAllToursClient = async (page, dispatch) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getAllToursClient',
            params: {
                page: page,
            },
        });
        dispatch(toursClient(res));
    } catch (err) {
        console.log(err);
    }
};

export const getTourSearch = async (search, dispatch, navigate) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getTourSearch',
            params: search,
        });
        dispatch(tourSearch(res));
        navigate(config.routes.toursSearch);
    } catch (err) {
        console.log(err);
    }
};

export const getTours = async (slug, dispatch) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getTours',
            params: {
                slug: slug,
            },
        });
        dispatch(tour(res));
    } catch (err) {
        console.log(err);
    }
};
