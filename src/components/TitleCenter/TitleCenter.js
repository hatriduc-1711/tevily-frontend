import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './TitleCenter.module.scss';

const cx = classNames.bind(styles);

function TitleCenter({ subTitle, title, classNames }) {
    return (
        <div className={cx('wrapper-title-center', { [classNames]: classNames })}>
            <h4 className={cx('sub-title')}>{subTitle}</h4>
            <h2 className={cx('title')}>{title}</h2>
        </div>
    );
}

TitleCenter.propTypes = {
    classNames: PropTypes.string,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TitleCenter;
