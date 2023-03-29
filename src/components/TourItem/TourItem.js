import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsHeart, BsHeartFill, BsClockHistory, BsArrowRight } from 'react-icons/bs';
import { FcOldTimeCamera, FcCamcorderPro } from 'react-icons/fc';
import { SiGooglemaps } from 'react-icons/si';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import styles from './TourItem.module.scss';
import config from '~/config';
import ShowVideo from '~/components/ShowVideo';
import ShowImage from '~/components/ShowImage';
import { loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function TourItem({ img, title, address, price, duration, path, column3 = false, column2 = false }) {
    const [heart, setHeart] = useState(false);
    const login = useSelector(loginSelector);
    const [showVideo, setShowVideo] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const navigate = useNavigate();

    const videoRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!videoRef?.current?.contains(event.target)) {
                setShowVideo(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
    }, [videoRef]);

    const handleHeart = () => {
        if (login?.code === 0) {
            setHeart(!heart);
        } else {
            const auth = window.confirm('You have not logged in you. Do you want to login?');
            if (auth) navigate(config.routes.login);
        }
    };

    const handleClose = () => {
        setShowImage(false);
    };

    return (
        <>
            <section
                className={cx('column', {
                    column3,
                    column2,
                    columnTablet: 'columnTablet',
                    column2Tablet: 'column2Tablet',
                    columnMobile: 'columnMobile',
                    columnMobile1: 'columnMobile1',
                })}
            >
                <div className={cx('wrapper-tour')}>
                    <Link to={`${config.routes.toursDetail}/${path}`} className={cx('image-link')}>
                        <img src={img} alt="" />
                    </Link>
                    <div onClick={handleHeart} className={cx('btn-like')}>
                        {heart ? <BsHeartFill className={cx('icon-fill')} /> : <BsHeart />}
                    </div>
                    <div className={cx('tour-container')}>
                        <div className={cx('heading')}>
                            <div className={cx('stars')}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                                <div className={cx('text')}>4.6 BY 3 REVIEWS</div>
                            </div>
                            <div className={cx('image-video')}>
                                <div onClick={() => setShowImage(true)} className={cx('icon-image')}>
                                    <FcOldTimeCamera />
                                </div>
                                <div onClick={() => setShowVideo(true)} className={cx('icon-video')}>
                                    <FcCamcorderPro />
                                </div>
                            </div>
                        </div>
                        <Link to={`${config.routes.toursDetail}/${path}`} className={cx('title-link')}>
                            <h3 className={cx('title')}>{title}</h3>{' '}
                        </Link>
                        <div className={cx('address')}>
                            <SiGooglemaps />
                            <span>{address}</span>
                        </div>
                        <div className={cx('price')}>
                            <p>
                                From <strong>{price}</strong>
                            </p>
                        </div>
                        <div className={cx('wrapper-info')}>
                            <div className={cx('time-people')}>
                                <div className={cx('time')}>
                                    <BsClockHistory />
                                    <span>{duration} days</span>
                                </div>
                                <div className={cx('people')}>
                                    <HiOutlineUserGroup />
                                    <span>50</span>
                                </div>
                            </div>
                            <Link to={`${config.routes.toursDetail}/${path}`} className={cx('btn-explore')}>
                                Explore
                                <BsArrowRight className={cx('icon-right')} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {showVideo && <ShowVideo ref={videoRef} />}
            <ShowImage showImage={showImage} handleClose={handleClose} />
        </>
    );
}

TourItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    duration: PropTypes.string,
};

export default TourItem;
