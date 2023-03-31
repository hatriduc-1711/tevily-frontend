import classNames from 'classnames/bind';
import { useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './Destination.module.scss';
import Slider from '~/components/Slider';
import ElementPhone from '~/components/ElementPhone';
import TourItem from '~/components/TourItem';
import TitleCenter from '~/components/TitleCenter';
import { destinationSelector } from '~/redux/selectors';
import { getDestination } from '~/services/destinationService';

const cx = classNames.bind(styles);

function DestinationDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const destination = useSelector(destinationSelector);
    const params = useParams();

    useEffect(() => {
        document.title = destination?.name;
    }, [destination]);

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) navigate('/login');
        getDestination(params.slug, dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, dispatch]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Slider namePage={destination?.name} />
            <section className={cx('wrapper-detail')}>
                <div className={cx('grid')}>
                    <div className={cx('detail-container')}>
                        <div className={cx('row', { rowTablet: 'rowTablet', rowMobile: 'rowMobile' })}>
                            <section
                                className={cx('column', {
                                    column2: 'column2',
                                    columnTablet: 'columnTablet',
                                    column1Tablet: 'column1Tablet',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                })}
                            >
                                <div className={cx('image')}>
                                    <img src={destination?.image} alt="" />
                                </div>
                            </section>
                            <section
                                className={cx('column', {
                                    column2: 'column2',
                                    columnTablet: 'columnTablet',
                                    column1Tablet: 'column1Tablet',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                })}
                            >
                                <div className={cx('info-container')}>
                                    <h3 className={cx('name-destination')}>{destination?.name}</h3>
                                    <p className={cx('text')}>
                                        Lorem ipsum available isn but the majority have suffered alteratin in some or
                                        form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean
                                        sollicitudin, lorem quis bibendum auctor consequat.
                                    </p>
                                    <ul className={cx('list-info')}>
                                        <li className={cx('info-item')}>
                                            <h4 className={cx('name-info')}>Destination</h4>
                                            <p>{destination?.name}</p>
                                        </li>
                                        <li className={cx('info-item')}>
                                            <h4 className={cx('name-info')}>Languages Spoken</h4>
                                            <p>{destination?.languages}</p>
                                        </li>
                                        <li className={cx('info-item')}>
                                            <h4 className={cx('name-info')}>Visa Requirements</h4>
                                            <p>Personal Documents Requied</p>
                                        </li>
                                        <li className={cx('info-item')}>
                                            <h4 className={cx('name-info')}>Area (km2)</h4>
                                            <p>{destination?.area}</p>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('tours-outstanding')}>
                <div className={cx('grid')}>
                    <div className={cx('tours-outstanding-container')}>
                        <TitleCenter subTitle="Explore Tour" title="Most Popular Tours" />
                        <div className={cx('row', { rowMobile: 'rowMobile', rowTablet: 'rowTablet' })}>
                            {destination?.tours.map((tour) => (
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
                    </div>
                </div>
            </section>
            <ElementPhone />
        </>
    );
}

export default DestinationDetail;
