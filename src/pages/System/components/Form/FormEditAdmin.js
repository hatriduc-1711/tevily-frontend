import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Form.module.scss';
import Button from '~/components/Button';
import { UpdateAdmin } from '~/services/adminServices';
import { updateAdmin } from '~/redux/adminSlice/adminSlice';
import { updateAdminSelector, loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function FormEditAdmin({ setShow, admin }) {
    const [email, setEmail] = useState(admin?.email);
    const [name, setName] = useState(admin?.name);
    const dispatch = useDispatch();
    const messageUpdateAdmin = useSelector(updateAdminSelector);
    const login = useSelector(loginSelector);
    const mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const data = {
        id: admin._id,
        email: email,
        name: name,
    };

    useEffect(() => {
        if (messageUpdateAdmin?.code === 0) {
            setShow(false);
            dispatch(updateAdmin(null));
        }
    }, [messageUpdateAdmin?.code, setShow, dispatch]);

    const handleShow = () => {
        setShow(false);
        dispatch(updateAdmin(null));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        UpdateAdmin(data, dispatch, login.accessToken);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-form')}>
                <button onClick={handleShow} className={cx('btn-close')}>
                    <IoMdClose />
                </button>
                <form className={cx('form')}>
                    <h3 className={cx('title')}>Edit admin </h3>
                    <div className={cx('group-input')}>
                        <div className={cx('input-item')}>
                            <label htmlFor="Email" className={cx('label')}>
                                Email *
                            </label>
                            <br />
                            <input
                                value={email}
                                type="email"
                                id="Email"
                                className={cx('input')}
                                placeholder="Email address..."
                                spellCheck={false}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className={cx('error')}>
                                {messageUpdateAdmin?.code === 1 ? <span>{messageUpdateAdmin?.message}</span> : ''}
                            </div>
                        </div>
                    </div>
                    <div className={cx('group-input')}>
                        <div className={cx('input-item')}>
                            <label htmlFor="Name" className={cx('label')}>
                                Name *
                            </label>
                            <br />
                            <input
                                value={name}
                                type="text"
                                id="Name"
                                className={cx('input')}
                                placeholder="Name..."
                                spellCheck={false}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button
                        disable={!email.match(mailFormat) || !name}
                        onClick={(e) => handleUpdate(e)}
                        className={cx('btn-add')}
                    >
                        Update
                    </Button>
                </form>
            </div>
        </div>
    );
}

FormEditAdmin.propTypes = {
    setShow: PropTypes.func,
    admin: PropTypes.object,
};

export default FormEditAdmin;
