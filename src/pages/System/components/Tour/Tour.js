import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { HiPencil } from 'react-icons/hi';
import { ImBin } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Tour.module.scss';
import { DeleteTour, getAllTours } from '~/services/adminServices';
import { loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function Tour({ data }) {
    const login = useSelector(loginSelector);
    const dispatch = useDispatch();

    const handleDelete = async () => {
        const result = window.confirm('Do you want to delete this tour ?');
        if (result) {
            await DeleteTour(data, login.accessToken);
            getAllTours(dispatch, login.accessToken);
        }
    };

    return (
        <div className={cx('column', { column4: 'column4', mb: 'mb' })}>
            <div className={cx('wrapper')}>
                <img src={data.image} alt="" />
                <div className={cx('footer')}>
                    <h4 className={cx('title')}>{data.title}</h4>
                    <h6 className={cx('destination')}>{data.destination}</h6>
                    <div className={cx('options')}>
                        <button className={cx('btn')}>
                            <HiPencil />
                        </button>
                        <button onClick={handleDelete} className={cx('btn')}>
                            <ImBin />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Tour.propTypes = {
    data: PropTypes.object,
};

export default Tour;
