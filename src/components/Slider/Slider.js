import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';

import styles from './Slider.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Slider({ namePage }) {
    return (
        <section className={cx('wrapper-slider')}>
            <div className={cx('grid')}>
                <div className={cx('slider-container')}>
                    <h3 className={cx('name-page')}>{namePage}</h3>
                    <div className={cx('breadcrumb')}>
                        <Link to={config.routes.home}>Home</Link>
                        <h5 className={cx('page-active')}>
                            <RxSlash className={cx('icon-slash')} />
                            {namePage}
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

Slider.propTypes = {
    namePage: PropTypes.string,
};

export default Slider;
