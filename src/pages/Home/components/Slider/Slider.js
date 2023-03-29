import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper';

import styles from './Slider.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Slider({ className }) {
    return (
        <div className={cx('wrapper', { className: className })}>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Navigation]}
                className={cx('mySwiper')}
            >
                <SwiperSlide className={cx('slider-one')}>
                    <div className={cx('slider-container')}>
                        <h2 className={cx('slider-title')}>Travel & Adventures</h2>
                        <img src={images.layer} alt="" />
                        <p>Where Would You Like To Go ?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={cx('slider-two')}>
                    <div className={cx('slider-two-container')}>
                        <h2 className={cx('slider-two-title')}>Traveling</h2>
                        <h2 className={cx('introduce')}>Your Journey Begins Here</h2>
                        <img src={images.layer} alt="" />
                        <p>
                            8700 TOURS ARE AVAILABLE, <a href="#">BOOK NOW</a>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={cx('slider-three')}>
                    <div className={cx('slider-container')}>
                        <h2 className={cx('slider-title')}>Travel & Adventures</h2>
                        <img src={images.layer} alt="" />
                        <p>Where Would You Like To Go ?</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

Slider.propTypes = {
    className: PropTypes.string,
};

export default Slider;
