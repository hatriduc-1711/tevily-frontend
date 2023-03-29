import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './DestinationItem.module.scss';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function DestinationItem({
    to = config.routes.destination,
    img,
    tours,
    name,
    subTitle,
    className,
    hot,
    column = false,
    column1 = false,
    column4 = false,
    column2 = false,
    columnMobile1 = false,
}) {
    const classNames = cx('columnMobile', { [className]: className, column, column1, column4, column2, columnMobile1 });

    return (
        <section className={classNames}>
            <Link to={to} className={cx('wrapper-destination')}>
                {hot ? (
                    <>
                        <p>Up to 30% off</p>
                        <h4 className={cx('title')}>
                            Summer <br />
                            &nbsp;&nbsp;&nbsp;hot deals
                        </h4>
                        <Button className={cx('btn')}>VIEW DEALS</Button>
                    </>
                ) : (
                    <>
                        <img src={img} alt="" className={cx('background-destination')} />
                        <div className={cx('number-tours')}>{tours} TOURS</div>
                        <div className={cx('name-destination')}>
                            <h6 className={cx('sub-title')}>{subTitle}</h6>
                            <h4 className={cx('name')}>{name}</h4>
                        </div>
                    </>
                )}
            </Link>
        </section>
    );
}

DestinationItem.propTypes = {
    img: PropTypes.string,
    tours: PropTypes.number,
    name: PropTypes.string,
    subTitle: PropTypes.string,
};

export default DestinationItem;
