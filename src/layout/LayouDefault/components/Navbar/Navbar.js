import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineUser, HiUserPlus } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import { FiMenu, FiChevronRight } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';

import styles from './Navbar.module.scss';
import images from '~/assets/images';
import config from '~/config';
import NavItem from './NavItem';
import { loginSelector } from '~/redux/selectors';
import { logOut } from '~/services/authService';

const cx = classNames.bind(styles);

function Navbar() {
    const [search, setSearch] = useState(false);
    const [account, setAccount] = useState(true);
    const [openNavMb, setOpenNavMb] = useState(false);
    const login = useSelector(loginSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchRef = useRef();
    const infoRef = useRef();

    const handleLogOut = () => {
        logOut(dispatch, navigate, login.accessToken);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!searchRef?.current?.contains(event.target)) {
                setSearch(false);
            }
            if (!infoRef?.current?.contains(event.target)) {
                setAccount(true);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
    }, [searchRef, infoRef]);

    return (
        <>
            <section className={cx('wrapper')}>
                <div className={cx('grid', { 'wrapper-nav': 'wrapper-nav' })}>
                    <div className={cx('wrapper-left')}>
                        <div className={cx('logo')}>
                            <Link to={config.routes.home}>
                                <img src={images.logo} alt="" />
                            </Link>
                        </div>
                        <nav className={cx('navbar')}>
                            <ul className={cx('nav-list')}>
                                <li className={cx('nav-item')}>
                                    <NavItem to={config.routes.home} className={cx('navLink')}>
                                        <span>Home</span>
                                    </NavItem>
                                </li>
                                <li className={cx('nav-item')}>
                                    <NavItem to={config.routes.tours} className={cx('navLink')}>
                                        <span>Tours</span>
                                    </NavItem>
                                </li>
                                <li className={cx('nav-item')}>
                                    <NavItem to={config.routes.destination} className={cx('navLink')}>
                                        <span>Destination</span>
                                    </NavItem>
                                </li>
                                <li className={cx('nav-item')}>
                                    <NavItem to={config.routes.news} className={cx('navLink')}>
                                        <span>News</span>
                                    </NavItem>
                                </li>
                                <li className={cx('nav-item')}>
                                    <NavItem to={config.routes.contacts} className={cx('navLink')}>
                                        <span>Contacts</span>
                                    </NavItem>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cx('wrapper-right')}>
                        <div ref={searchRef} className={cx('wrapper-search', { 'active-search': search })}>
                            {search && (
                                <input type="text" spellCheck={false} autoFocus={true} placeholder="search . . ." />
                            )}
                            <div onClick={() => setSearch(true)} className={cx('wrapper-icon')}>
                                <CiSearch className={cx('icon-search')} />
                            </div>
                        </div>
                        <div ref={infoRef} className={cx('wrapper-info', { 'active-account': !account })}>
                            <div onClick={() => setAccount(!account)} className={cx('wrapper-icon')}>
                                <VscAccount className={cx('icon-user')} />
                            </div>
                            <div className={cx('wrapper-option', { account: account })}>
                                {login === null && (
                                    <ul className={cx('list-option')}>
                                        <li className={cx('item-option')}>
                                            <Link to={config.routes.login}>
                                                <HiOutlineUser className={cx('icon-option')} />
                                                <span>Login</span>
                                            </Link>
                                        </li>
                                        <li className={cx('item-option')}>
                                            <Link to={config.routes.register}>
                                                <HiUserPlus className={cx('icon-option')} />
                                                <span>Register</span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                                {login?.code === 0 && (
                                    <ul className={cx('list-option')}>
                                        <li className={cx('item-option')}>
                                            <div onClick={handleLogOut}>
                                                <IoIosLogOut className={cx('icon-option')} />
                                                <span>Logout</span>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div onClick={() => setOpenNavMb(true)} className={cx('wrapper-btn-nav-mb')}>
                            <FiMenu />
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('wrapper-nav-mb', { open: openNavMb })}>
                <div className={cx('nav-mb')}>
                    <div className={cx('header-nav-mb')}>
                        <img src={images.logo} alt="" />
                        <div onClick={() => setOpenNavMb(false)} className={cx('btn-close-nav-mb')}>
                            <CgCloseO />
                        </div>
                    </div>
                    <div className={cx('navbar-mb')}>
                        <ul className={cx('nav-list-mb')}>
                            <li onClick={() => setOpenNavMb(false)} className={cx('nav-item-mb')}>
                                <NavItem className={cx('NavLink-mb')} to={config.routes.home}>
                                    <span>Home</span>
                                    <FiChevronRight />
                                </NavItem>
                            </li>
                            <li onClick={() => setOpenNavMb(false)} className={cx('nav-item-mb')}>
                                <NavItem className={cx('NavLink-mb')} to={config.routes.tours}>
                                    <span>Tours</span>
                                    <FiChevronRight />
                                </NavItem>
                            </li>
                            <li onClick={() => setOpenNavMb(false)} className={cx('nav-item-mb')}>
                                <NavItem className={cx('NavLink-mb')} to={config.routes.destination}>
                                    <span>Destination</span>
                                    <FiChevronRight />
                                </NavItem>
                            </li>
                            <li onClick={() => setOpenNavMb(false)} className={cx('nav-item-mb')}>
                                <NavItem className={cx('NavLink-mb')} to={config.routes.news}>
                                    <span>News</span>
                                    <FiChevronRight />
                                </NavItem>
                            </li>
                            <li onClick={() => setOpenNavMb(false)} className={cx('nav-item-mb')}>
                                <NavItem className={cx('NavLink-mb')} to={config.routes.contacts}>
                                    <span>Contacts</span>
                                    <FiChevronRight />
                                </NavItem>
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={() => setOpenNavMb(false)} className={cx('space')}></div>
            </section>
        </>
    );
}

export default Navbar;
