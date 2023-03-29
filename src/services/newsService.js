import request from '~/utils/request';
import { allNews, news } from '~/redux/newsSlice/newsSlice';

export const getAllNews = async (page, dispatch) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getAllNews',
            params: {
                page: page,
            },
        });
        dispatch(allNews(res));
    } catch (err) {
        console.log(err);
    }
};

export const getNews = async (slug, dispatch) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/getNews',
            params: {
                slug: slug,
            },
        });
        dispatch(news(res));
    } catch (err) {
        console.log(err);
    }
};
