import classNames from 'classnames/bind';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import styles from './SliderTeam.module.scss';
import TitleCenter from '~/components/TitleCenter';

const cx = classNames.bind(styles);

function SliderTeam() {
    const btnPC = useRef();
    const btnTB = useRef();
    const btnMB = useRef();
    return (
        <section className={cx('wrapper-slider-team')}>
            <div className={cx('grid')}>
                <div className={cx('slider-team-container')}>
                    <TitleCenter subTitle="Professional people" title="Meet the Team" />
                    <Swiper
                        ref={btnPC}
                        slidesPerView={4}
                        spaceBetween={25}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        className={cx('mySwiper', { 'mySlider-pc': 'mySlider-pc' })}
                    >
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-3.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Christine Eve</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-4.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>David Hardson</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-5.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Fred Andrew</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-1.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Jessica Brown</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-2.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Yoni Albert</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <div
                            onClick={() => btnPC.current.swiper.slidePrev()}
                            className={cx('btn-navigation', { 'btn-prev': 'btn-prev' })}
                        >
                            <FaAngleLeft />
                        </div>
                        <div
                            onClick={() => btnPC.current.swiper.slideNext()}
                            className={cx('btn-navigation', { 'btn-next': 'btn-next' })}
                        >
                            <FaAngleRight />
                        </div>
                    </Swiper>
                    <Swiper
                        ref={btnTB}
                        slidesPerView={3}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        className={cx('mySwiper', { 'mySlider-tb': 'mySlider-tb' })}
                    >
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-3.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Christine Eve</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-4.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>David Hardson</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-5.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Fred Andrew</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-1.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Jessica Brown</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-2.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Yoni Albert</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <div
                            onClick={() => btnTB.current.swiper.slidePrev()}
                            className={cx('btn-navigation', { 'btn-prev': 'btn-prev' })}
                        >
                            <FaAngleLeft />
                        </div>
                        <div
                            onClick={() => btnTB.current.swiper.slideNext()}
                            className={cx('btn-navigation', { 'btn-next': 'btn-next' })}
                        >
                            <FaAngleRight />
                        </div>
                    </Swiper>
                    <Swiper
                        ref={btnMB}
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        className={cx('mySwiper', { 'mySlider-mb': 'mySlider-mb' })}
                    >
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-3.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Christine Eve</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-4.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>David Hardson</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-5.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Fred Andrew</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-1.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Jessica Brown</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={cx('swiper-slider')}>
                                <img
                                    src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/team-2.jpg"
                                    alt=""
                                ></img>
                                <div className={cx('name-container')}>
                                    <h4 className={cx('name')}>Yoni Albert</h4>
                                    <span>Consultant</span>
                                </div>
                                <ul className={cx('lis-social-network')}>
                                    <li className={cx('item-social-network')}>
                                        <FaFacebookF />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaTwitter />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaInstagram />
                                    </li>
                                    <li className={cx('item-social-network')}>
                                        <FaPinterest />
                                    </li>
                                </ul>
                            </section>
                        </SwiperSlide>
                        <div
                            onClick={() => btnMB.current.swiper.slidePrev()}
                            className={cx('btn-navigation', { 'btn-prev': 'btn-prev' })}
                        >
                            <FaAngleLeft />
                        </div>
                        <div
                            onClick={() => btnMB.current.swiper.slideNext()}
                            className={cx('btn-navigation', { 'btn-next': 'btn-next' })}
                        >
                            <FaAngleRight />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default SliderTeam;
