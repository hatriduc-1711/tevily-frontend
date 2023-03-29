import classNames from 'classnames/bind';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <Link to={config.routes.home}>
                    <img className={cx('logo')} src={images.logo} alt="logo" />
                </Link>
                <NavLink className={(nav) => cx('navLink', { active: nav.isActive })} to={config.routes.admin}>
                    ADMIN
                </NavLink>
                <NavLink className={(nav) => cx('navLink', { active: nav.isActive })} to={config.routes.admin_users}>
                    USERS
                </NavLink>
                <NavLink className={(nav) => cx('navLink', { active: nav.isActive })} to={config.routes.admin_tours}>
                    TOURS
                </NavLink>
            </div>
            <div className={cx('header-right')}>
                <HiOutlineLogout />
            </div>
        </div>
    );
}

export default Header;
