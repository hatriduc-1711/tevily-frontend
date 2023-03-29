import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaPinterest,
    FaFacebookSquare,
} from 'react-icons/fa';

import styles from './Header.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper-header')}>
            <div className={cx('grid', { header: 'header' })}>
                <ul className={cx('list-contact')}>
                    <li className={cx('item-contact')}>
                        <a href="tel:039 556 8136">
                            <span className={cx('icon-contact')}>
                                <FaPhoneAlt />
                            </span>
                            <span>0395568136</span>
                        </a>
                    </li>
                    <li className={cx('item-contact')}>
                        <a href="mailto:hatriduc32@gmail.com">
                            <span className={cx('icon-contact')}>
                                <FaEnvelope />
                            </span>
                            <span>hatriduc32@gmail.com</span>
                        </a>
                    </li>
                </ul>
                <ul className={cx('list-social-network-tablet-mobile')}>
                    <li className={cx('item-social-network-tablet-mobile')}>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className={cx('item-social-network-tablet-mobile')}>
                        <a
                            href="https://www.facebook.com/profile.php?id=100016234173663"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebookSquare />
                        </a>
                    </li>
                    <li className={cx('item-social-network-tablet-mobile')}>
                        <a href="https://www.instagram.com/hatriduc__/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className={cx('item-social-network-tablet-mobile')}>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
                <div className={cx('wrapper-right')}>
                    <ul className={cx('list-social-network')}>
                        <li className={cx('item-social-network')}>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>
                        </li>
                        <li className={cx('item-social-network')}>
                            <a
                                href="https://www.facebook.com/profile.php?id=100016234173663"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook />
                            </a>
                        </li>
                        <li className={cx('item-social-network')}>
                            <a href="https://www.instagram.com/hatriduc__/" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className={cx('item-social-network')}>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                                <FaPinterest />
                            </a>
                        </li>
                    </ul>
                    <div className={cx('button-wrapper')}>
                        <Link to={config.routes.tours}>
                            <span>BECOME A LOCAL GUIDE</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
