import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <section className={cx('wrapper-notFound')}>
            <div className={cx('not-found-code')}>
                <img src="https://d8qbqtt58lzda.cloudfront.net/gosell-404.png" alt="" />
            </div>
            <h1 className={cx('title')}>No content was found 😓</h1>
            <p>The URL of this content has been changed or no longer exists</p>
            <p>If you are saving this URL, try accessing it again from the homepage instead of using the saved URL</p>
            <Button to={config.routes.home} className={cx('btn')}>
                ACCESS HOME PAGE
            </Button>
        </section>
    );
}

export default NotFound;
