import classNames from 'classnames/bind';
import {
    FaPhoneSquareAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
} from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { HiArrowNarrowUp } from 'react-icons/hi';

import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <section className={cx('section-information')}>
                <div className={cx('grid')}>
                    <div className={cx('row', { rowTablet: 'rowTablet', rowMobile: 'rowMobile' })}>
                        <section
                            className={cx('column', {
                                columnMobile: 'columnMobile',
                                columnMobile1: 'columnMobile1',
                                columnTablet: 'columnTablet',
                                column2Tablet: 'column2Tablet',
                                column3: 'column3',
                                'section-one': 'section-one',
                            })}
                        >
                            <img src={images.logoFooter} alt="" />
                            <p className={cx('text')}>
                                Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.
                            </p>
                            <ul className={cx('list-contacts')}>
                                <li className={cx('item-contact')}>
                                    <a href="tel:0395568136">
                                        <FaPhoneSquareAlt className={cx('icon')} />
                                        <>039 556 8136</>
                                    </a>
                                </li>
                                <li className={cx('item-contact')}>
                                    <a href="mailto:hatriduc32@gmail.com">
                                        <FaEnvelope className={cx('icon')} />
                                        <>hatriduc32@gmail.com</>
                                    </a>
                                </li>
                                <li className={cx('item-contact')}>
                                    <a
                                        href="https://www.google.com/maps/place/C%C3%A2y+x%C4%83ng+li%C3%AAn+l%E1%BB%99c/@19.9427418,105.9223155,16.6z/data=!4m6!3m5!1s0x31365d94718a0d07:0xa06972c4b4ca05ea!8m2!3d19.9426484!4d105.92411!16s%2Fg%2F11mnc1v_55"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaMapMarkerAlt className={cx('icon')} />
                                        <>66 Broklyn Street New York, USA</>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section
                            className={cx('column', {
                                columnMobile: 'columnMobile',
                                columnMobile2: 'columnMobile2',
                                columnTablet: 'columnTablet',
                                column2Tablet: 'column2Tablet',
                                column6: 'column6',
                                'section-two': 'section-two',
                            })}
                        >
                            <h4 className={cx('title')}>Company</h4>
                            <ul className={cx('list-company')}>
                                <li className={cx('item-company')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        About Us
                                    </a>
                                </li>
                                <li className={cx('item-company')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Community Blog
                                    </a>
                                </li>
                                <li className={cx('item-company')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Rewards
                                    </a>
                                </li>
                                <li className={cx('item-company')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Work with Us
                                    </a>
                                </li>
                                <li className={cx('item-company')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section
                            className={cx('column', {
                                columnMobile: 'columnMobile',
                                columnMobile2: 'columnMobile2',
                                columnTablet: 'columnTablet',
                                column2Tablet: 'column2Tablet',
                                column6: 'column6',
                                'section-three': 'section-three',
                            })}
                        >
                            <h4 className={cx('title')}>Explore</h4>
                            <ul className={cx('list-explore')}>
                                <li className={cx('item-explore')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Account
                                    </a>
                                </li>
                                <li className={cx('item-explore')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className={cx('item-explore')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Affilitate Program
                                    </a>
                                </li>
                                <li className={cx('item-explore')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Our Partner
                                    </a>
                                </li>
                                <li className={cx('item-explore')}>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        Events
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section
                            className={cx('column', {
                                columnMobile: 'columnMobile',
                                columnMobile1: 'columnMobile1',
                                columnTablet: 'columnTablet',
                                column2Tablet: 'column2Tablet',
                                column3: 'column3',
                                'section-four': 'section-four',
                            })}
                        >
                            <h4 className={cx('title')}>Newsletter</h4>
                            <input type="email" placeholder="Email address" />
                            <button className={cx('btn-subscribe')}>SUBSCRIBE</button>
                            <a href="https://www.facebook.com/" className={cx('link')} target="_blank" rel="noreferrer">
                                <FiCheckCircle className={cx('icon-check')} />
                                <p>I agree to all terms and policies</p>
                            </a>
                        </section>
                    </div>
                </div>
            </section>
            <section className={cx('section-footer')}>
                <section className={cx('distance-left')}></section>
                <section className={cx('section-footer-container')}>
                    <div className={cx('grid', { 'wrapper-container': 'wrapper-container' })}>
                        <div className={cx('footer-container-left')}>
                            <div className={cx('btn-scroll-top')}>
                                <a href="#">
                                    <HiArrowNarrowUp />
                                </a>
                            </div>
                            <ul className={cx('list-social-network')}>
                                <li className={cx('item-social-network')}>
                                    <FaTwitter />
                                </li>
                                <li className={cx('item-social-network')}>
                                    <FaFacebook />
                                </li>
                                <li className={cx('item-social-network')}>
                                    <FaInstagram />
                                </li>
                                <li className={cx('item-social-network')}>
                                    <FaPinterest />
                                </li>
                            </ul>
                        </div>
                        <div className={cx('footer-container-right')}>
                            <p>© Copyright 2021 by Gaviasthemes</p>
                        </div>
                    </div>
                </section>
                <section className={cx('distance-right')}></section>
            </section>
        </footer>
    );
}

export default Footer;
