import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import config from '~/config';
import styles from './ElementParis.module.scss';
import TitleStart from '~/components/TitleStart';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ElementParis() {
    return (
        <section className={cx('wrapper-element-paris')}>
            <div className={cx('grid')}>
                <div className={cx('element-paris-container')}>
                    <div className={cx('row', { rowMobile: 'rowMobile' })}>
                        <section
                            className={cx('column', {
                                column2: 'column2',
                                columnMobile: 'columnMobile',
                                columnMobile1: 'columnMobile1',
                            })}
                        >
                            <Link to={config.routes.tours} className={cx('wrapper-banner')}>
                                <img src="https://tevily.web4s.vn/wp-content/uploads/2021/09/image-6.jpg" alt="" />
                                <div className={cx('discount-container')}>
                                    <h3>30%</h3>
                                    <h4>Discount</h4>
                                </div>
                                <div className={cx('phone-container')}>
                                    <span>BOOK TOUR NOW</span>
                                    <h4>039 556 8136</h4>
                                </div>
                            </Link>
                        </section>
                        <section
                            className={cx('column', {
                                column2: 'column2',
                                columnMobile: 'columnMobile',
                                columnMobile1: 'columnMobile1',
                            })}
                        >
                            <div className={cx('section-content')}>
                                <TitleStart subTitle="Get to know us" title="Plan Your Trip with Trevily" />
                                <p>
                                    There are many variations of passages of available but the majority have suffered
                                    alteration in some form, by injected hum randomised words which don't look even
                                    slightly.
                                </p>
                                <ul className={cx('list-content')}>
                                    <li className={cx('item-content')}>
                                        <BsFillCheckCircleFill className={cx('icon-check')} /> Invest in your simply
                                        neighborhood
                                    </li>
                                    <li className={cx('item-content')}>
                                        <BsFillCheckCircleFill className={cx('icon-check')} /> Support people in free
                                        text extreme
                                    </li>
                                    <li className={cx('item-content')}>
                                        <BsFillCheckCircleFill className={cx('icon-check')} /> Largest global industrial
                                        business
                                    </li>
                                </ul>
                                <Button to={config.routes.tours} className={cx('btn-book-tour')}>
                                    BOOK WITH US NOW
                                </Button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ElementParis;
