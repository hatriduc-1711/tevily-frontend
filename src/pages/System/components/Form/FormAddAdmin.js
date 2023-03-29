import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';

import styles from './Form.module.scss';
import Button from '~/components/Button';
import { CreateAdmin } from '~/services/adminServices';
import { addAdminSelector, loginSelector } from '~/redux/selectors';
import { addAdmin } from '~/redux/adminSlice/adminSlice';

const cx = classNames.bind(styles);

function FormAddAdmin({ setShow }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const dispatch = useDispatch();
    const messageCreateAdmin = useSelector(addAdminSelector);
    const login = useSelector(loginSelector);

    const data = {
        email: email,
        name: name,
        password: password,
    };

    useEffect(() => {
        if (messageCreateAdmin?.code === 0) {
            setShow(false);
            dispatch(addAdmin(null));
        }
    }, [setShow, dispatch, messageCreateAdmin?.code]);

    const handleShow = () => {
        setShow(false);
        dispatch(addAdmin(null));
    };

    const handleCreateAdmin = (e) => {
        e.preventDefault();
        CreateAdmin(data, dispatch, login.accessToken);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-form')}>
                <button onClick={handleShow} className={cx('btn-close')}>
                    <IoMdClose />
                </button>
                <form className={cx('form')}>
                    <h3 className={cx('title')}>Add admin </h3>
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
                                {messageCreateAdmin?.code === 1 ? <span>{messageCreateAdmin?.message}</span> : ''}
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
                    <div className={cx('group-input')}>
                        <div className={cx('input-item')}>
                            <label htmlFor="Password" className={cx('label')}>
                                Password *
                            </label>
                            <br />
                            <input
                                value={password}
                                type="text"
                                id="Password"
                                className={cx('input')}
                                placeholder="Password..."
                                spellCheck={false}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button
                        disable={!email.match(mailFormat) || !name || !(password.length >= 8)}
                        onClick={(e) => handleCreateAdmin(e)}
                        className={cx('btn-add')}
                    >
                        Add +
                    </Button>
                </form>
            </div>
        </div>
    );
}

FormAddAdmin.propTypes = {
    setShow: PropTypes.func,
};

export default FormAddAdmin;
