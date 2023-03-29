/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Admin.module.scss';
import Button from '~/components/Button';
import Tour from './components/Tour';
import FormAddTour from './components/Form/FormAddTour';
import { getAllTours } from '~/services/adminServices';
import { allTourSelector, loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function AdminTours() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const listTours = useSelector(allTourSelector);
    const login = useSelector(loginSelector);

    useEffect(() => {
        getAllTours(dispatch, login.accessToken);
    }, [dispatch]);

    return (
        <>
            {show && <FormAddTour setShow={setShow} />}
            <div className={cx('wrapper', { grid: 'grid' })}>
                <Button onClick={() => setShow(true)}>Add tour +</Button>
                <h3 className={cx('title')}>All tours 🌋 🌋 🌋</h3>
                <div className="row">
                    {listTours?.map((tour, index) => (
                        <Tour key={index} data={tour} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AdminTours;
