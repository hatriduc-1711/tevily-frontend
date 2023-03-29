import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { BsUpload } from 'react-icons/bs';
import { FcAddImage } from 'react-icons/fc';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import styles from './Form.module.scss';
import Button from '~/components/Button';
import { CreateTour } from '~/services/adminServices';
import { getAllTours } from '~/services/adminServices';
import { addTourSelector, loginSelector } from '~/redux/selectors';
import { addTour } from '~/redux/tourSlice/tourSlice';

const cx = classNames.bind(styles);

function FormAddTour({ setShow }) {
    const [linkImage, setLinkImage] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [activityType, setActivityType] = useState('Adventure');
    const dispatch = useDispatch();
    const tourSelector = useSelector(addTourSelector);
    const login = useSelector(loginSelector);

    const data = {
        title: title,
        price: price,
        address: address,
        image: linkImage,
        duration: duration,
        destination: destination,
        activityType: activityType,
    };

    useEffect(() => {
        if (tourSelector?.code === 0) {
            setShow(false);
            dispatch(addTour(null));
        }
    }, [setShow, dispatch, tourSelector?.code]);

    const HandleShow = () => {
        setShow(false);
        dispatch(addTour(null));
    };

    const handleUploadFile = (e) => {
        const files = e.target.files;
        const file = files[0];
        const image = URL.createObjectURL(file);
        setLinkImage(image);
    };

    const handleCreateTour = async (e) => {
        e.preventDefault();
        await CreateTour(data, dispatch, login.accessToken);
        getAllTours(dispatch, login.accessToken);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-form')}>
                <button onClick={HandleShow} className={cx('btn-close')}>
                    <IoMdClose />
                </button>
                <form className={cx('form')}>
                    <h3 className={cx('title')}>Add tour </h3>
                    <div className={cx('group-input')}>
                        <div className={cx('input-item')}>
                            <label htmlFor="Title" className={cx('label')}>
                                Title *
                            </label>
                            <br />
                            <input
                                value={title}
                                type="text"
                                id="Title"
                                className={cx('input')}
                                placeholder="- - - - - - - - -"
                                spellCheck={false}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div className={cx('error')}>
                                {tourSelector?.code === 1 ? <span>{tourSelector?.message}</span> : ''}
                            </div>
                        </div>
                        <div className={cx('input-item')}>
                            <label htmlFor="Address" className={cx('label')}>
                                Address *
                            </label>
                            <br />
                            <input
                                value={address}
                                type="text"
                                id="Address"
                                className={cx('input')}
                                placeholder="- - - - - - - - -"
                                spellCheck={false}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={cx('group-input')}>
                        <div className={cx('input-item')}>
                            <label htmlFor="Destination" className={cx('label')}>
                                Destination *
                            </label>
                            <br />
                            <input
                                value={destination}
                                type="text"
                                id="Destination"
                                className={cx('input')}
                                placeholder="- - - - - - - - -"
                                spellCheck={false}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className={cx('input-item')}>
                            <label htmlFor="Price" className={cx('label')}>
                                Price *
                            </label>
                            <br />
                            <input
                                value={price}
                                type="text"
                                id="Price"
                                className={cx('input')}
                                placeholder="- - - - - - - - -"
                                spellCheck={false}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={cx('group-input')}>
                        <div className={cx('input-item')}>
                            <label htmlFor="Duration" className={cx('label')}>
                                Duration *
                            </label>
                            <br />
                            <input
                                value={duration}
                                type="text"
                                id="Duration"
                                className={cx('input')}
                                placeholder="- - - - - - - - -"
                                spellCheck={false}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                        <div className={cx('input-item')}>
                            <label htmlFor="ActivityType" className={cx('label')}>
                                Activity Type *
                            </label>
                            <br />
                            <select
                                value={activityType}
                                onChange={(e) => setActivityType(e.target.value)}
                                id="ActivityType"
                                className={cx('input')}
                            >
                                <option value="Adventure">Adventure</option>
                                <option value="Beache">Beache</option>
                                <option value="CityTours">City Tours</option>
                                <option value="Cruises">Cruises</option>
                                <option value="Discovery">Discovery</option>
                                <option value="Historical">Historical</option>
                            </select>
                        </div>
                        <div className={cx('input-item')}>
                            <label htmlFor="uploadFile" className={cx('label')}>
                                <FcAddImage /> <BsUpload />
                            </label>
                            <br />
                            <input
                                onChange={(e) => handleUploadFile(e)}
                                type="file"
                                id="uploadFile"
                                className={cx('input-file')}
                            />
                            <div className={cx('image')}>
                                <PhotoProvider>
                                    <PhotoView src={linkImage}>
                                        <img src={linkImage} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                    </div>
                    <Button
                        disable={!title || !address || !destination || !price || !duration || !linkImage}
                        onClick={(e) => handleCreateTour(e)}
                        className={cx('btn-add')}
                    >
                        Add +
                    </Button>
                </form>
            </div>
        </div>
    );
}

FormAddTour.propTypes = {
    setShow: PropTypes.func,
};

export default FormAddTour;
