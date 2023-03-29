import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './TitleStart.module.scss';

const cx = classNames.bind(styles);

function TitleStart({ subTitle, title, className }) {
    return (
        <div className={cx('wrapper-title-center', { [className]: className })}>
            <h4 className={cx('sub-title')}>{subTitle}</h4>
            <h2 className={cx('title')}>{title}</h2>
        </div>
    );
}

TitleStart.propTypes = {
    className: PropTypes.string,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TitleStart;
