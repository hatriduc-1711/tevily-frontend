import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle, HiOutlineChatBubbleLeftRight, HiOutlineArrowLongRight } from 'react-icons/hi2';

import styles from './NewsItem.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function NewsItem({ img, title, path }) {
    return (
        <section
            className={cx('column', {
                column3: 'column3',
                columnTablet: 'columnTablet',
                column2Tablet: 'column2Tablet',
                columnMobile: 'columnMobile',
                columnMobile1: 'columnMobile1',
            })}
        >
            <div className={cx('wrapper-tour')}>
                <Link to={`${config.routes.newsDetail}/${path}`} className={cx('image')}>
                    <img src={img} alt="" />
                    <div className={cx('tag')}>
                        <strong>08</strong>
                        <span>DEC</span>
                    </div>
                </Link>
                <div className={cx('wrapper-info')}>
                    <div className={cx('heading')}>
                        <div className={cx('admin')}>
                            <HiOutlineUserCircle />
                            <span>ADMIN</span>
                        </div>
                        <div className={cx('comment')}>
                            <HiOutlineChatBubbleLeftRight />
                            <span>COMMENT</span>
                        </div>
                    </div>
                    <Link to={`${config.routes.newsDetail}/${path}`} className={cx('title-link')}>
                        <h3 className={cx('title')}>{title}</h3>
                    </Link>
                    <p className={cx('text')}>
                        There are many variations of but the majority have simply free text available not suffered.
                    </p>
                    <Link to={`${config.routes.newsDetail}/${path}`} className={cx('btn-explore')}>
                        READ MORE
                        <HiOutlineArrowLongRight className={cx('icon-right')} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

NewsItem.propTypes = {
    path: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NewsItem;
