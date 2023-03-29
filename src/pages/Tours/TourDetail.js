import classNames from 'classnames/bind';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { FiMapPin } from 'react-icons/fi';
import { IoPricetagsOutline, IoArrowRedoSharp } from 'react-icons/io5';
import { BsClockHistory, BsCheckLg } from 'react-icons/bs';
import { SlPlane, SlArrowDown } from 'react-icons/sl';
import { BiHeart } from 'react-icons/bi';
import { MdLocalGroceryStore } from 'react-icons/md';
import { FaStar, FaStarHalfAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { HiOutlineUserGroup, HiOutlineUserCircle, HiOutlineLanguage } from 'react-icons/hi2';
import { GiVideoCamera, GiPhotoCamera } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './Tours.module.scss';
import images from '~/assets/images';
import config from '~/config';
import DestinationItem from '~/components/DestinationItem';
import Button from '~/components/Button';
import ShowVideo from '~/components/ShowVideo';
import ShowImage from '~/components/ShowImage';
import { getTours } from '~/services/tourService';
import { tourSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function TourDetail() {
    const [datepicker, setDatepicker] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const [day1Plan, setDay1Plan] = useState(true);
    const [day2Plan, setDay2Plan] = useState(false);
    const [day3Plan, setDay3Plan] = useState(false);
    const [day4Plan, setDay4Plan] = useState(false);

    const datepickerRef = useRef();
    const videoRef = useRef();

    const dispatch = useDispatch();
    const tour = useSelector(tourSelector);
    const params = useParams();

    useEffect(() => {
        document.title = tour?.title;
    }, [tour]);

    useEffect(() => {
        getTours(params.slug, dispatch);
    }, [params, dispatch]);

    const handleClose = () => {
        setShowImage(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!datepickerRef?.current?.contains(event.target)) {
                setDatepicker(false);
            }
            if (!videoRef?.current?.contains(event.target)) {
                setShowVideo(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
    }, [datepickerRef, videoRef]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className={cx('cover-image')}>
                <div className={cx('grid')}>
                    <div className={cx('container')}>
                        <div className={cx('home-tours')}>
                            <Link className={cx('home')}>Home</Link>
                            <h5 className={cx('tour')}>
                                <RxSlash className={cx('icon-slash')} />
                                {tour?.title}
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('heading')}>
                <div className={cx('grid')}>
                    <div className={cx('wrapper-heading')}>
                        <div className={cx('name__tour-address')}>
                            <h4 className={cx('name-tour')}>{tour?.title}</h4>
                            <div className={cx('address')}>
                                <FiMapPin />
                                <span>{tour?.address}</span>
                            </div>
                        </div>
                        <div className={cx('information')}>
                            <div className={cx('price-container')}>
                                <IoPricetagsOutline />
                                <div className={cx('price')}>
                                    <h6>From</h6>
                                    <span>{tour?.price}</span>
                                </div>
                            </div>
                            <div className={cx('duration-container')}>
                                <BsClockHistory />
                                <div className={cx('duration')}>
                                    <h6>Duration</h6>
                                    <span>{tour?.duration} day</span>
                                </div>
                            </div>
                            <div className={cx('tour-type-container')}>
                                <SlPlane />
                                <div className={cx('tour-type')}>
                                    <h6>Tour Type</h6>
                                    <span>{tour?.activityType}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('wrapper-stars')}>
                <div className={cx('grid')}>
                    <div className={cx('stars-container')}>
                        <div className={cx('stars')}>
                            <FaStar className={cx('icon-star')} />
                            <FaStar className={cx('icon-star')} />
                            <FaStar className={cx('icon-star')} />
                            <FaStar className={cx('icon-star')} />
                            <FaStarHalfAlt className={cx('icon-star')} />
                        </div>
                        <div className={cx('group-btn-start')}>
                            <button className={cx('btn')}>
                                <IoArrowRedoSharp />
                                <span>SHARE</span>
                            </button>
                            <button className={cx('btn')}>
                                <IoArrowRedoSharp />
                                <span>REVIEWS</span>
                            </button>
                            <button className={cx('btn')}>
                                <BiHeart />
                                <span>WISHLIST</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('tour-detail-wrapper')}>
                <div className={cx('grid')}>
                    <div className={cx('tour-detail-container')}>
                        <div className={cx('row', { rowMobile: 'rowMobile', rowTablet: 'rowTablet' })}>
                            <section
                                className={cx('column', {
                                    'column3-2': 'column3-2',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    columnTablet: 'columnTablet',
                                    column1Tablet: 'column1Tablet',
                                })}
                            >
                                <div className={cx('tour-detail')}>
                                    <div className={cx('image')}>
                                        <img src={tour?.image} alt="" />
                                        <div className={cx('camera')}>
                                            <div onClick={() => setShowImage(true)} className={cx('icon-camera')}>
                                                <GiPhotoCamera />
                                            </div>
                                            <div onClick={() => setShowVideo(true)} className={cx('icon-camera')}>
                                                <GiVideoCamera />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('overview')}>
                                        <h4 className={cx('overview-title')}>Overview</h4>
                                        <p className={cx('text')}>
                                            Lorem ipsum available isn but the majority have suffered alteratin in some
                                            or form injected simply free text used by copytyping refreshing. Neque porro
                                            est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo. Lorem ipsum is simply free text used by
                                            copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed
                                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                            finibus eros.
                                        </p>
                                    </div>
                                    <div className={cx('included-exclude')}>
                                        <h4 className={cx('included-exclude-title')}>Included/Exclude</h4>
                                        <div className={cx('row', { rowMobile: 'rowMobile' })}>
                                            <div
                                                className={cx('column', {
                                                    column2: 'column2',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile1: 'columnMobile1',
                                                })}
                                            >
                                                <ul className={cx('list-included')}>
                                                    <li className={cx('item-included')}>
                                                        <BsCheckLg />
                                                        <span>Pick and Drop Services</span>
                                                    </li>
                                                    <li className={cx('item-included')}>
                                                        <BsCheckLg />
                                                        <span>1 Meal Per Day</span>
                                                    </li>
                                                    <li className={cx('item-included')}>
                                                        <BsCheckLg />
                                                        <span>Cruise Dinner & Music Event</span>
                                                    </li>
                                                    <li className={cx('item-included')}>
                                                        <BsCheckLg />
                                                        <span>Visit 7 Best Places in the City With Group</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className={cx('column', {
                                                    column2: 'column2',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile1: 'columnMobile1',
                                                })}
                                            >
                                                <ul className={cx('list-exclude')}>
                                                    <li className={cx('item-exclude')}>
                                                        <GrClose />
                                                        <span>Additional Services</span>
                                                    </li>
                                                    <li className={cx('item-exclude')}>
                                                        <GrClose />
                                                        <span>Insurance</span>
                                                    </li>
                                                    <li className={cx('item-exclude')}>
                                                        <GrClose />
                                                        <span>Food & Drinks</span>
                                                    </li>
                                                    <li className={cx('item-exclude')}>
                                                        <GrClose />
                                                        <span>Tickets</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('tour-amenities')}>
                                        <h4 className={cx('tour-amenities-title')}>Tour Amenities</h4>
                                        <ul
                                            className={cx('list-tour-amenities', {
                                                row: 'row',
                                                rowTablet: 'rowTablet',
                                                rowMobile: 'rowMobile',
                                            })}
                                        >
                                            <li
                                                className={cx('item-tour-amenities', {
                                                    column: 'column',
                                                    column3: 'column3',
                                                    columnTablet: 'columnTablet',
                                                    column2Tablet: 'column2Tablet',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile2: 'columnMobile2',
                                                })}
                                            >
                                                <div className={cx('amenities-icon')}>
                                                    <img src={images.card} alt="" />
                                                </div>
                                                <span>Accepts Credit Cards</span>
                                            </li>
                                            <li
                                                className={cx('item-tour-amenities', {
                                                    column: 'column',
                                                    column3: 'column3',
                                                    columnTablet: 'columnTablet',
                                                    column2Tablet: 'column2Tablet',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile2: 'columnMobile2',
                                                })}
                                            >
                                                <div className={cx('amenities-icon')}>
                                                    <img src={images.parking} alt="" />
                                                </div>
                                                <span>Car Parking</span>
                                            </li>
                                            <li
                                                className={cx('item-tour-amenities', {
                                                    column: 'column',
                                                    column3: 'column3',
                                                    columnTablet: 'columnTablet',
                                                    column2Tablet: 'column2Tablet',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile2: 'columnMobile2',
                                                })}
                                            >
                                                <div className={cx('amenities-icon')}>
                                                    <img src={images.tags} alt="" />
                                                </div>
                                                <span>Free Coupons</span>
                                            </li>
                                            <li
                                                className={cx('item-tour-amenities', {
                                                    column: 'column',
                                                    column3: 'column3',
                                                    columnTablet: 'columnTablet',
                                                    column2Tablet: 'column2Tablet',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile2: 'columnMobile2',
                                                })}
                                            >
                                                <div className={cx('amenities-icon')}>
                                                    <img src={images.seating} alt="" />
                                                </div>
                                                <span>Outdoor Seating</span>
                                            </li>
                                            <li
                                                className={cx('item-tour-amenities', {
                                                    column: 'column',
                                                    column3: 'column3',
                                                    columnTablet: 'columnTablet',
                                                    column2Tablet: 'column2Tablet',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile2: 'columnMobile2',
                                                })}
                                            >
                                                <div className={cx('amenities-icon')}>
                                                    <img src={images.smoking} alt="" />
                                                </div>
                                                <span>Smoking Allowed</span>
                                            </li>
                                            <li
                                                className={cx('item-tour-amenities', {
                                                    column: 'column',
                                                    column3: 'column3',
                                                    columnTablet: 'columnTablet',
                                                    column2Tablet: 'column2Tablet',
                                                    columnMobile: 'columnMobile',
                                                    columnMobile2: 'columnMobile2',
                                                })}
                                            >
                                                <div className={cx('amenities-icon')}>
                                                    <img src={images.wifi} alt="" />
                                                </div>
                                                <span>Wireless Internet</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('tour-plan')}>
                                        <h4 className={cx('tour-plan-title')}>Tour Plan</h4>
                                        <div
                                            onClick={() => setDay1Plan(!day1Plan)}
                                            className={cx('plan-container', { open: day1Plan })}
                                        >
                                            <div className={cx('heading-plan')}>
                                                <h5>Day 1</h5>
                                                <SlArrowDown className={cx('icon-arrow')} />
                                            </div>
                                            <p className={cx('text')}>
                                                Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros
                                                iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius
                                                quodsi molestiae at, nostrum definitiones his cu. Discere referrentur
                                                mea id, an pri novum possim deterruisset.
                                            </p>
                                        </div>
                                        <div
                                            onClick={() => setDay2Plan(!day2Plan)}
                                            className={cx('plan-container', { open: day2Plan })}
                                        >
                                            <div className={cx('heading-plan')}>
                                                <h5>Day 2</h5>
                                                <SlArrowDown className={cx('icon-arrow')} />
                                            </div>
                                            <p className={cx('text')}>
                                                Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros
                                                iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius
                                                quodsi molestiae at, nostrum definitiones his cu. Discere referrentur
                                                mea id, an pri novum possim deterruisset.
                                            </p>
                                        </div>
                                        <div
                                            onClick={() => setDay3Plan(!day3Plan)}
                                            className={cx('plan-container', { open: day3Plan })}
                                        >
                                            <div className={cx('heading-plan')}>
                                                <h5>Day 3</h5>
                                                <SlArrowDown className={cx('icon-arrow')} />
                                            </div>
                                            <p className={cx('text')}>
                                                Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros
                                                iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius
                                                quodsi molestiae at, nostrum definitiones his cu. Discere referrentur
                                                mea id, an pri novum possim deterruisset.
                                            </p>
                                        </div>
                                        <div
                                            onClick={() => setDay4Plan(!day4Plan)}
                                            className={cx('plan-container', { open: day4Plan })}
                                        >
                                            <div className={cx('heading-plan')}>
                                                <h5>Day 4</h5>
                                                <SlArrowDown className={cx('icon-arrow')} />
                                            </div>
                                            <p className={cx('text')}>
                                                Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros
                                                iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius
                                                quodsi molestiae at, nostrum definitiones his cu. Discere referrentur
                                                mea id, an pri novum possim deterruisset.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('map')}>
                                        <h4 className={cx('map-title')}>Location</h4>
                                        <div className={cx('map-container')}>
                                            <iframe
                                                title="map"
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15016.09904233669!2d105.79381835!3d19.796547500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1678898376852!5m2!1svi!2s"
                                                width="100%"
                                                height="100%"
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className={cx('column', { column3: 'column3', hide: 'hide' })}>
                                <div className={cx('form-book-tour')}>
                                    <div className={cx('title')}>
                                        <h4>Booking Tour</h4>
                                    </div>
                                    <div className={cx('form-book-tour-container')}>
                                        <div className={cx('date-container')}>
                                            <h6>From:</h6>
                                            <div className={cx('date-wrapper')}>
                                                <div onClick={() => setDatepicker(!datepicker)} className={cx('date')}>
                                                    <FaRegCalendarAlt />
                                                </div>
                                                {datepicker && (
                                                    <div ref={datepickerRef} className={cx('wrapper-datepicker')}>
                                                        <DatePicker
                                                            // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                                                            inline
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className={cx('time')}>
                                            <h6>Time:</h6>
                                        </div>
                                        <div className={cx('tickets')}>
                                            <h6>Tickets:</h6>
                                            <span className={cx('message')}>please, select date first</span>
                                        </div>
                                        <h5 className={cx('add-extra')}>Add Extra</h5>
                                        <div className={cx('check-box-service')}>
                                            <div className={cx('checkbox-booking')}>
                                                <input type="checkbox" id="booking" />
                                                <label htmlFor="booking">Service per booking</label>
                                            </div>
                                            <strong>{tour?.price}</strong>
                                        </div>
                                        <div className={cx('check-box-service')}>
                                            <div className={cx('checkbox-person')}>
                                                <input type="checkbox" id="person" />
                                                <label htmlFor="person">Service per person</label>
                                            </div>
                                            <span>
                                                Adult: <strong>$20.00</strong>
                                            </span>
                                            <span>
                                                Youth: <strong>$20.00</strong>
                                            </span>
                                            <span>
                                                Children: <strong>$20.00</strong>
                                            </span>
                                        </div>
                                        <div className={cx('total')}>
                                            <h5>Total:</h5>
                                            <span></span>
                                        </div>
                                        <Button icon={<MdLocalGroceryStore />} className={cx('btn-booking')}>
                                            BOOK NOW
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('tour-information')}>
                                    <div className={cx('title')}>
                                        <h4>Tour Information</h4>
                                    </div>
                                    <ul className={cx('list-information')}>
                                        <li className={cx('item-information')}>
                                            <HiOutlineUserGroup />
                                            <div className={cx('max-guests')}>
                                                <h5>Max Guests</h5>
                                                <span>50</span>
                                            </div>
                                        </li>
                                        <li className={cx('item-information')}>
                                            <HiOutlineUserCircle />
                                            <div className={cx('min-age')}>
                                                <h5>Min Age</h5>
                                                <span>12+</span>
                                            </div>
                                        </li>
                                        <li className={cx('item-information')}>
                                            <SlPlane />
                                            <div className={cx('tour-location')}>
                                                <h5>Tour Location</h5>
                                                <span>{tour?.destination}</span>
                                            </div>
                                        </li>
                                        <li className={cx('item-information')}>
                                            <HiOutlineLanguage />
                                            <div className={cx('languages-support')}>
                                                <h5>Languages Support</h5>
                                                <span>English, German</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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
                        </div>
                    </div>
                </div>
            </section>
            {showVideo && <ShowVideo ref={videoRef} />}
            <ShowImage showImage={showImage} handleClose={handleClose} />
        </>
    );
}

export default TourDetail;
