/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Admin.module.scss';
import TableUser from '~/pages/System/components/Table/TableUser';
import { getAllUsers } from '~/services/adminServices';
import { loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function AdminUsers() {
    const dispatch = useDispatch();
    const login = useSelector(loginSelector);

    useEffect(() => {
        getAllUsers(dispatch, login.accessToken);
    }, []);

    return (
        <>
            <div className={cx('wrapper', { grid: 'grid' })}>
                <h3 className={cx('title')}>All users 🌋 🌋 🌋</h3>
                <TableUser />
            </div>
        </>
    );
}

export default AdminUsers;
