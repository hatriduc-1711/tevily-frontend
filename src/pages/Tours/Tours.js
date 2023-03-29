import classNames from 'classnames/bind';
import { useLayoutEffect, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import styles from './Tours.module.scss';
import TitleCenter from '~/components/TitleCenter';
import TourItem from '~/components/TourItem';
import Slider from '~/components/Slider';
import SearchBar from '~/components/SearchBar';
import ElementPhone from '~/components/ElementPhone';
import { getAllToursClient } from '~/services/tourService';
import { allTourClientSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function Tours() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const listTours = useSelector(allTourClientSelector);
    const pagesNumber = [];

    for (let i = 1; i <= listTours?.totalPages; i++) {
        pagesNumber.push(i);
    }

    const handleNext = () => {
        if (page < listTours?.totalPages) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    useEffect(() => {
        document.title = 'Tours';
        getAllToursClient(page, dispatch);
    }, [page, dispatch]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <Slider namePage="Tours" />
            <SearchBar />
            <section className={cx('wrapper-list-tours')}>
                <div className={cx('grid')}>
                    <div className={cx('list-tours-container')}>
                        <TitleCenter subTitle="Explore Tour" title="Most Popular Tours" />
                        <div className={cx('row', { rowTablet: 'rowTablet', rowMobile: 'rowMobile' })}>
                            {listTours?.listTours.map((tour) => (
                                <TourItem
                                    column3
                                    key={tour._id}
                                    img={tour.image}
                                    title={tour.title}
                                    address={tour.address}
                                    price={tour.price}
                                    duration={tour.duration}
                                    path={tour.slug}
                                />
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
                            {page !== listTours?.totalPages && (
                                <button onClick={handleNext} className={cx('btn', { 'btn-next': 'btn-next' })}>
                                    <MdKeyboardArrowRight />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <ElementPhone />
        </>
    );
}

export default Tours;
