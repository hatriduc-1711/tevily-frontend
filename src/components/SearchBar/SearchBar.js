import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { IoOptionsOutline } from 'react-icons/io5';
import { BiSearchAlt } from 'react-icons/bi';
import { FiMinus, FiPlus } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './SearchBar.module.scss';
import './DatePicker.scss';
import images from '~/assets/images';
import { getTourSearch } from '~/services/tourService';

const cx = classNames.bind(styles);

function Home() {
    const [destination, setDestination] = useState('');
    const [activity, setActivity] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(0);
    const [adult, setAdult] = useState(0);
    const [youth, setYouth] = useState(0);
    const [children, setChildren] = useState(0);

    const [listDestination, setListDestination] = useState(false);
    const [listActivity, setListActivity] = useState(false);
    const [optionGuests, setOptionGuests] = useState(false);
    const [datepicker, setDatepicker] = useState(false);

    const destinationRef = useRef();
    const activityRef = useRef();
    const GuestsRef = useRef();
    const datepickerRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const search = {};

    const handleDateSelect = () => {
        setDate(`${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (destination) search.destination = destination;
        if (activity) search.activityType = activity;
        getTourSearch(search, dispatch, navigate);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!destinationRef?.current?.contains(event.target)) {
                setListDestination(false);
            }
            if (!activityRef?.current?.contains(event.target)) {
                setListActivity(false);
            }
            if (!GuestsRef?.current?.contains(event.target)) {
                setOptionGuests(false);
            }
            if (!datepickerRef?.current?.contains(event.target)) {
                setDatepicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
    }, [destinationRef, activityRef, GuestsRef, datepickerRef]);

    useEffect(() => {
        setGuests(adult + youth + children);
    }, [adult, youth, children]);

    return (
        <section className={cx('grid')}>
            <div className={cx('wrapper-search-form')}>
                <form className={cx('container-search-form')}>
                    <div className={cx('search-option')}>
                        <div
                            className={cx('rowSearch', {
                                rowTablet: 'rowTablet',
                                rowMobile: 'rowMobile',
                            })}
                        >
                            <div
                                className={cx('columnSearch', {
                                    columnTablet: 'columnTablet',
                                    column2Tablet: 'column2Tablet',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    columnLargeSearch: 'columnLargeSearch',
                                })}
                            >
                                <div className={cx('destination-container')}>
                                    <div className={cx('icon-destination-container')}>
                                        <img src={images.iconDestination} alt="" />
                                    </div>
                                    <div
                                        onClick={() => setListDestination(!listDestination)}
                                        className={cx('destination-content')}
                                    >
                                        <div className={cx('title-destination')}>
                                            <h6>Where are you going ?</h6>
                                            {listDestination ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                        </div>
                                        <div className={cx('destination-option')}>
                                            <h5>{destination || 'Destination'}</h5>
                                        </div>
                                    </div>
                                    {listDestination && (
                                        <ul ref={destinationRef} className={cx('list-destination')}>
                                            <li
                                                onClick={() => {
                                                    setDestination('');
                                                    setListDestination(!listDestination);
                                                }}
                                                className={cx('header-destination')}
                                            >
                                                -Destination-
                                            </li>
                                            <div className={cx('area')}>
                                                <h6 className={cx('name-area')}>Africa</h6>
                                                <li
                                                    onClick={() => {
                                                        setDestination('Morocco');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    Morocco
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setDestination('Nigeria');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    Nigeria
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setDestination('Tanzania');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    Tanzania
                                                </li>
                                            </div>
                                            <div className={cx('area')}>
                                                <h6 className={cx('name-area')}>Asia</h6>
                                                <li
                                                    onClick={() => {
                                                        setDestination('Japan');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    {' '}
                                                    Japan
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setDestination('Singapore');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    {' '}
                                                    Singapore
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setDestination('ThaiLand');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    {' '}
                                                    ThaiLand
                                                </li>
                                            </div>
                                            <div className={cx('area')}>
                                                <h6 className={cx('name-area')}>Europe</h6>
                                                <li
                                                    onClick={() => {
                                                        setDestination('France');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    {' '}
                                                    France
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setDestination('Hungary');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    {' '}
                                                    Hungary
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setDestination('Italy');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    {' '}
                                                    Italy
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setDestination('United Kingdom');
                                                        setListDestination(!listDestination);
                                                    }}
                                                    className={cx('item-destination')}
                                                >
                                                    {' '}
                                                    United Kingdom
                                                </li>
                                            </div>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div
                                className={cx('columnSearch', {
                                    columnTablet: 'columnTablet',
                                    column2Tablet: 'column2Tablet',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    column4: 'column4',
                                })}
                            >
                                <div className={cx('activity-container')}>
                                    <div className={cx('icon-activity-container')}>
                                        <img src={images.iconActivity} alt="" />
                                    </div>
                                    <div
                                        onClick={() => setListActivity(!listActivity)}
                                        className={cx('activity-content')}
                                    >
                                        <div className={cx('title-activity')}>
                                            <h6>Activity type ?</h6>
                                            {listActivity ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                        </div>
                                        <div className={cx('activity-option')}>
                                            <h5>{activity || 'Activity'}</h5>
                                        </div>
                                    </div>
                                    {listActivity && (
                                        <ul ref={activityRef} className={cx('list-activity')}>
                                            <li
                                                onClick={() => {
                                                    setActivity('');
                                                    setListActivity(!listActivity);
                                                }}
                                                className={cx('header-activity')}
                                            >
                                                -Activity-
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActivity('Adventure');
                                                    setListActivity(!listActivity);
                                                }}
                                                className={cx('item-activity')}
                                            >
                                                {' '}
                                                Adventure
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActivity('Beache');
                                                    setListActivity(!listActivity);
                                                }}
                                                className={cx('item-activity')}
                                            >
                                                {' '}
                                                Beache
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActivity('City Tours');
                                                    setListActivity(!listActivity);
                                                }}
                                                className={cx('item-activity')}
                                            >
                                                {' '}
                                                City Tours
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActivity('Cruises');
                                                    setListActivity(!listActivity);
                                                }}
                                                className={cx('item-activity')}
                                            >
                                                {' '}
                                                Cruises
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActivity('Discovery');
                                                    setListActivity(!listActivity);
                                                }}
                                                className={cx('item-activity')}
                                            >
                                                {' '}
                                                Discovery
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActivity('Historical');
                                                    setListActivity(!listActivity);
                                                }}
                                                className={cx('item-activity')}
                                            >
                                                {' '}
                                                Historical
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div
                                className={cx('columnSearch', {
                                    columnTablet: 'columnTablet',
                                    column2Tablet: 'column2Tablet',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    column4: 'column4',
                                })}
                            >
                                <div className={cx('date-container')}>
                                    <div className={cx('icon-date-container')}>
                                        <img src={images.iconClock} alt="" />
                                    </div>
                                    <div onClick={() => setDatepicker(!datepicker)} className={cx('date-content')}>
                                        <div className={cx('title-date')}>
                                            <h6>When</h6>
                                        </div>
                                        <div className={cx('date')}>
                                            <h5>{date || 'Date Form'}</h5>
                                        </div>
                                    </div>
                                    {datepicker && (
                                        <div ref={datepickerRef} className={cx('wrapper-datepicker')}>
                                            <DatePicker
                                                selected={startDate}
                                                onSelect={handleDateSelect}
                                                onChange={(date) => setStartDate(date)}
                                                // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                                                inline
                                            />
                                            <div className={cx('group-btn-datepicker')}>
                                                <div
                                                    onClick={() => setDatepicker(false)}
                                                    className={cx('btn-datepicker')}
                                                >
                                                    Cancel
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        setDate(
                                                            `${startDate.getDate()}/${
                                                                startDate.getMonth() + 1
                                                            }/${startDate.getFullYear()}`,
                                                        );
                                                        setDatepicker(false);
                                                    }}
                                                    className={cx('btn-datepicker')}
                                                >
                                                    Apply
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={cx('columnSearch', {
                                    columnTablet: 'columnTablet',
                                    column2Tablet: 'column2Tablet',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    columnSmallSearch: 'columnSmallSearch',
                                })}
                            >
                                <div className={cx('guests-container')}>
                                    <div className={cx('icon-guests-container')}>
                                        <img src={images.iconUsers} alt="" />
                                    </div>
                                    <div
                                        onClick={() => setOptionGuests(!optionGuests)}
                                        className={cx('guests-content')}
                                    >
                                        <div className={cx('title-guests')}>
                                            <h6>Guests</h6>
                                        </div>
                                        <div className={cx('guests')}>
                                            <h5>{guests}</h5>
                                        </div>
                                    </div>
                                    {optionGuests && (
                                        <div ref={GuestsRef} className={cx('options-guests')}>
                                            <div className={cx('wrapper-adult')}>
                                                <div className={cx('adult')}>
                                                    <h5>{adult}</h5>
                                                    <div>Adults</div>
                                                </div>
                                                <div className={cx('group-btn-adult')}>
                                                    <div
                                                        onClick={() => {
                                                            adult === 0 ? setAdult(0) : setAdult(adult - 1);
                                                        }}
                                                        className={cx('btn-adult')}
                                                    >
                                                        <FiMinus />
                                                    </div>
                                                    <div
                                                        onClick={() => setAdult(adult + 1)}
                                                        className={cx('btn-adult')}
                                                    >
                                                        <FiPlus />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('wrapper-youth')}>
                                                <div className={cx('youth')}>
                                                    <h5>{youth}</h5>
                                                    <div>Youth</div>
                                                </div>
                                                <div className={cx('group-btn-youth')}>
                                                    <div
                                                        onClick={() => {
                                                            youth === 0 ? setYouth(0) : setYouth(youth - 1);
                                                        }}
                                                        className={cx('btn-youth')}
                                                    >
                                                        <FiMinus />
                                                    </div>
                                                    <div
                                                        onClick={() => setYouth(youth + 1)}
                                                        className={cx('btn-youth')}
                                                    >
                                                        <FiPlus />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('wrapper-children')}>
                                                <div className={cx('children')}>
                                                    <h5>{children}</h5>
                                                    <div>Children</div>
                                                </div>
                                                <div className={cx('group-btn-children')}>
                                                    <div
                                                        onClick={() => {
                                                            children === 0 ? setChildren(0) : setChildren(children - 1);
                                                        }}
                                                        className={cx('btn-children')}
                                                    >
                                                        <FiMinus />
                                                    </div>
                                                    <div
                                                        onClick={() => setChildren(children + 1)}
                                                        className={cx('btn-children')}
                                                    >
                                                        <FiPlus />
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => setOptionGuests(false)} className={cx('btn-apply')}>
                                                APPLY
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper-btn-search')}>
                        <IoOptionsOutline className={cx('icon-option')} />
                        <button onClick={(e) => handleSearch(e)} className={cx('btn-search')}>
                            <BiSearchAlt className={cx('icon-search')} />
                            SEARCH
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Home;
