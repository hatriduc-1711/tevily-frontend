/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Admin.module.scss';
import Button from '~/components/Button';
import TableAdmin from './components/Table';
import FormAddAdmin from './components/Form';
import FormEditAdmin from '~/pages/System/components/Form/FormEditAdmin';
import { getAllAdmins } from '~/services/adminServices';
import { loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function Admin() {
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [admin, setAdmin] = useState({});
    const [showFormEdit, setShowFormEdit] = useState(false);
    const dispatch = useDispatch();

    const login = useSelector(loginSelector);

    useEffect(() => {
        getAllAdmins(dispatch, login.accessToken);
    }, []);

    return (
        <>
            {showFormAdd && <FormAddAdmin setShow={setShowFormAdd} />}
            {showFormEdit && <FormEditAdmin setShow={setShowFormEdit} admin={admin} />}
            <div className={cx('wrapper', { grid: 'grid' })}>
                <Button onClick={() => setShowFormAdd(true)}>Add admin +</Button>
                <h3 className={cx('title')}>All admins 🌋 🌋 🌋</h3>
                <TableAdmin setAdmin={setAdmin} setShow={setShowFormEdit} />
            </div>
        </>
    );
}

export default Admin;
