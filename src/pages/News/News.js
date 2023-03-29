import classNames from 'classnames/bind';
import { useLayoutEffect, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import styles from './News.module.scss';
import NewsItem from '~/components/NewsItem';
import Slider from '~/components/Slider';
import SliderTeam from '~/components/SliderTeam';
import { getAllNews } from '~/services/newsService';
import { allNewsSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function News() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const listNews = useSelector(allNewsSelector);
    const pagesNumber = [];

    for (let i = 1; i <= listNews?.totalPages; i++) {
        pagesNumber.push(i);
    }

    const handleNext = () => {
        if (page < listNews?.totalPages) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    useEffect(() => {
        document.title = 'News';
        getAllNews(page, dispatch);
    }, [page, dispatch]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Slider namePage="News" />
            <section className={cx('wrapper-list-news')}>
                <div className={cx('grid')}>
                    <div className={cx('list-news-container')}>
                        <div className={cx('row', { rowTablet: 'rowTablet', rowMobile: 'rowMobile' })}>
                            {listNews?.listNews.map((news) => (
                                <NewsItem key={news._id} path={news.slug} img={news.image} title={news.title} />
                            ))}
                        </div>
                        <div className={cx('group-btn')}>
                            {page !== 1 && (
                                <button onClick={handlePrev} className={cx('btn', { 'btn-prev': 'btn-prev' })}>
                                    <MdKeyboardArrowLeft />
                                </button>
                            )}
                            {pagesNumber.map((index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setPage(index)}
                                        className={cx('btn', { active: page === index })}
                                    >
                                        {index}
                                    </button>
                                );
                            })}
                            {page !== listNews?.totalPages && (
                                <button onClick={handleNext} className={cx('btn', { 'btn-next': 'btn-next' })}>
                                    <MdKeyboardArrowRight />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <SliderTeam />
        </>
    );
}

export default News;
