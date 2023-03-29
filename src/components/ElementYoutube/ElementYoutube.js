import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';

import styles from './ElementYoutube.module.scss';
import TitleStart from '~/components/TitleStart';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

function ElementYoutube() {
    return (
        <section className={cx('wrapper-element-youtube')}>
            <div className={cx('grid')}>
                <div className={cx('element-youtube-container')}>
                    <div className={cx('row', { rowMobile: 'rowMobile' })}>
                        <section
                            className={cx('column', {
                                columnMobile: 'columnMobile',
                                columnMobile1: 'columnMobile1',
                                columnLargeYoutube: 'columnLargeYoutube',
                            })}
                        >
                            <div className={cx('section-first-child')}>
                                <a
                                    href="https://www.youtube.com/watch?v=IMiZ_KS9jBE"
                                    className={cx('logo-youtube-link')}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className={cx('logo-youtube')}>
                                        <BsFillPlayFill />
                                    </div>
                                </a>
                                <TitleStart
                                    className={cx('title')}
                                    subTitle="Are you ready to travel?"
                                    title="Tevily is a World Leading Online Tour Booking Platform"
                                />
                            </div>
                        </section>
                        <section
                            className={cx('column', {
                                columnMobile: 'columnMobile',
                                columnMobile1: 'columnMobile1',
                                columnSmallYoutube: 'columnSmallYoutube',
                            })}
                        >
                            <div className={cx('row', { guttersNarrow: 'guttersNarrow' })}>
                                <section className={cx('column', { column2: 'column2' })}>
                                    <Link to={config.routes.destination} className={cx('wrapper-item')}>
                                        <div className={cx('background-item')}></div>
                                        <div className={cx('item-content')}>
                                            <div className={cx('icon')}>
                                                <img src={images.icon1} alt="" />
                                            </div>
                                            <h3 className={cx('title')}>
                                                Wildlife <br /> Tours
                                            </h3>
                                        </div>
                                    </Link>
                                </section>
                                <section className={cx('column', { column2: 'column2' })}>
                                    <Link to={config.routes.destination} className={cx('wrapper-item')}>
                                        <div className={cx('background-item')}></div>
                                        <div className={cx('item-content')}>
                                            <div className={cx('icon')}>
                                                <img src={images.icon2} alt="" />
                                            </div>
                                            <h3 className={cx('title')}>
                                                Paragliding <br /> Tours
                                            </h3>
                                        </div>
                                    </Link>
                                </section>
                                <section className={cx('column', { column2: 'column2' })}>
                                    <Link to={config.routes.destination} className={cx('wrapper-item')}>
                                        <div className={cx('background-item')}></div>
                                        <div className={cx('item-content')}>
                                            <div className={cx('icon')}>
                                                <img src={images.icon3} alt="" />
                                            </div>
                                            <h3 className={cx('title')}>
                                                Adventure <br /> Tours
                                            </h3>
                                        </div>
                                    </Link>
                                </section>
                                <section className={cx('column', { column2: 'column2' })}>
                                    <Link to={config.routes.destination} className={cx('wrapper-item')}>
                                        <div className={cx('background-item')}></div>
                                        <div className={cx('item-content')}>
                                            <div className={cx('icon')}>
                                                <img src={images.icon4} alt="" />
                                            </div>
                                            <h3 className={cx('title')}>
                                                Hang Gliding <br /> Tours
                                            </h3>
                                        </div>
                                    </Link>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ElementYoutube;
