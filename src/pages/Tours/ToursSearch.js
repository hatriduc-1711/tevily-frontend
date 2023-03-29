import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import styles from './Tours.module.scss';
import config from '~/config';
import TourItem from '~/components/TourItem';
import DestinationItem from '~/components/DestinationItem';
import Slider from '~/components/Slider';
import SearchBar from '~/components/SearchBar';
import ElementPhone from '~/components/ElementPhone';
import { allTourSearch } from '~/redux/selectors';

const cx = classNames.bind(styles);

function ToursSearch() {
    const tourSearch = useSelector(allTourSearch);

    return (
        <>
            <Slider namePage="Tours Search" />
            <SearchBar />
            <section className={cx('tours-search-wrapper')}>
                <div className={cx('grid')}>
                    <div className={cx('tours-search-container')}>
                        <div className={cx('row', { rowMobile: 'rowMobile', rowTablet: 'rowTablet' })}>
                            <section className={cx('column', { column3: 'column3', hide: 'hide' })}>
                                <div className={cx('last-minute-deals')}>
                                    <div className={cx('title')}>
                                        <h4>Last Minute Deals</h4>
                                    </div>
                                    <ul className={cx('list-tours-deals')}>
                                        <li className={cx('item-tour-deals')}>
                                            <img
                                                src="https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-4-600x590.jpg"
                                                alt=""
                                            />
                                            <div className={cx('tour-deals-information')}>
                                                <div className={cx('tour-star')}>
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStarHalfAlt className={cx('icon-star')} />
                                                </div>
                                                <div className={cx('name-tour')}>
                                                    <h4>Java & Bali One Life Adventures</h4>
                                                </div>
                                                <div className={cx('price-tour')}>
                                                    <span>
                                                        From <strong>$59.00</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={cx('item-tour-deals')}>
                                            <img
                                                src="https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-12-600x590.jpg"
                                                alt=""
                                            />
                                            <div className={cx('tour-deals-information')}>
                                                <div className={cx('tour-star')}>
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStarHalfAlt className={cx('icon-star')} />
                                                </div>
                                                <div className={cx('name-tour')}>
                                                    <h4>Sri Lanka One Life Adventures</h4>
                                                </div>
                                                <div className={cx('price-tour')}>
                                                    <span>
                                                        From <strong>$69.00</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={cx('item-tour-deals')}>
                                            <img
                                                src="https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-7-600x590.jpg"
                                                alt=""
                                            />
                                            <div className={cx('tour-deals-information')}>
                                                <div className={cx('tour-star')}>
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStarHalfAlt className={cx('icon-star')} />
                                                </div>
                                                <div className={cx('name-tour')}>
                                                    <h4>North Island Adventure Tour</h4>
                                                </div>
                                                <div className={cx('price-tour')}>
                                                    <span>
                                                        From <strong>$119.00</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={cx('item-tour-deals')}>
                                            <img
                                                src="https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-3-600x590.jpg"
                                                alt=""
                                            />
                                            <div className={cx('tour-deals-information')}>
                                                <div className={cx('tour-star')}>
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStar className={cx('icon-star')} />
                                                    <FaStarHalfAlt className={cx('icon-star')} />
                                                </div>
                                                <div className={cx('name-tour')}>
                                                    <h4>Greece, Italy, Switzerland and Paris</h4>
                                                </div>
                                                <div className={cx('price-tour')}>
                                                    <span>
                                                        From <strong>$59.00</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <DestinationItem
                                    className={cx('destination')}
                                    to={`${config.routes.destinationDetail}/italy`}
                                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-5.jpg'}
                                    tours={3}
                                    name={'Italy'}
                                    subTitle={'Adventure'}
                                    column1
                                />
                                <DestinationItem
                                    className={cx('destination')}
                                    to={`${config.routes.destinationDetail}/japan`}
                                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-9.jpg'}
                                    tours={3}
                                    name={'Japan'}
                                    subTitle={'Wildlife'}
                                    column1
                                />
                                <DestinationItem
                                    className={cx('destination')}
                                    to={`${config.routes.destinationDetail}/france`}
                                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-8.jpg'}
                                    tours={3}
                                    name={'France'}
                                    subTitle={'Relax'}
                                    column1
                                />
                            </section>
                            <section
                                className={cx('column', {
                                    'column3-2': 'column3-2',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    columnTablet: 'columnTablet',
                                    column1Tablet: 'column1Tablet',
                                })}
                            >
                                {tourSearch?.length > 0 ? (
                                    <div className={cx('row', { rowMobile: 'rowMobile', rowTablet: 'rowTablet' })}>
                                        {tourSearch?.map((tour) => (
                                            <TourItem
                                                column2
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
                                ) : (
                                    <div className={cx('message')}>
                                        <h4>No available tours</h4>
                                        <span>It seems we can’t find what you’re looking for.</span>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <ElementPhone />
        </>
    );
}

export default ToursSearch;
