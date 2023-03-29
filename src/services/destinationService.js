import request from '~/utils/request';
import { allDestination, destination } from '~/redux/destinationSlice/destinationSlice';

export const getAllDestinations = async (dispatch) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getAllDestinations',
        });
        dispatch(allDestination(res));
    } catch (err) {
        console.log(err);
    }
};

export const getDestination = async (slug, dispatch) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getDestination',
            params: {
                slug: slug,
            },
        });
        dispatch(destination(res));
    } catch (err) {
        console.log(err);
    }
};
