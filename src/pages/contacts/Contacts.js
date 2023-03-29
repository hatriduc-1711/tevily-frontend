import classNames from 'classnames/bind';
import { useLayoutEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { BsPhoneVibrate } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import styles from './Contacts.module.scss';
import Slider from '~/components/Slider';
import TitleStart from '~/components/TitleStart';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Contacts() {
    useLayoutEffect(() => {
        document.title = 'Contacts';
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Slider namePage="Contact" />
            <section className={cx('wrapper-form')}>
                <div className={cx('grid')}>
                    <div className={cx('form-container')}>
                        <div className={cx('row', { rowMobile: 'rowMobile' })}>
                            <section
                                className={cx('column', {
                                    columnSmallContact: 'columnSmallContact',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                })}
                            >
                                <div className={cx('container-first')}>
                                    <TitleStart
                                        subTitle="Talk with our team"
                                        title="Any Question? Feel Free to Contact"
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh
                                        euismod tincidunt.
                                    </p>
                                    <div className={cx('group-btn')}>
                                        <a
                                            href="https://www.facebook.com/profile.php?id=100016234173663"
                                            className={cx('btn-social-network')}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaFacebook />
                                        </a>
                                        <a
                                            href="https://twitter.com/"
                                            className={cx('btn-social-network')}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaTwitter />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/hatriduc__/"
                                            className={cx('btn-social-network')}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaInstagram />
                                        </a>
                                        <a
                                            href="https://www.pinterest.com/"
                                            className={cx('btn-social-network')}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaPinterestP />
                                        </a>
                                    </div>
                                </div>
                            </section>
                            <section
                                className={cx('column', {
                                    columnLargeContact: 'columnLargeContact',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                })}
                            >
                                <form className={cx('container-form')}>
                                    <div className={cx('row', { rowMobile: 'rowMobile', rowTablet: 'rowTablet' })}>
                                        <div
                                            className={cx('column', {
                                                column2: 'column2',
                                                columnMobile: 'columnMobile',
                                                columnMobile1: 'columnMobile1',
                                                columnTablet: 'columnTablet',
                                                column2Tablet: 'column2Tablet',
                                            })}
                                        >
                                            <input type="text" placeholder="Your Name" spellCheck={false} />
                                        </div>
                                        <div
                                            className={cx('column', {
                                                column2: 'column2',
                                                columnMobile: 'columnMobile',
                                                columnMobile1: 'columnMobile1',
                                                columnTablet: 'columnTablet',
                                                column2Tablet: 'column2Tablet',
                                            })}
                                        >
                                            <input type="text" placeholder="Email Address" spellCheck={false} />
                                        </div>
                                        <div
                                            className={cx('column', {
                                                column2: 'column2',
                                                columnMobile: 'columnMobile',
                                                columnMobile1: 'columnMobile1',
                                                columnTablet: 'columnTablet',
                                                column2Tablet: 'column2Tablet',
                                            })}
                                        >
                                            <input type="text" placeholder="Phone Number" spellCheck={false} />
                                        </div>
                                        <div
                                            className={cx('column', {
                                                column2: 'column2',
                                                columnMobile: 'columnMobile',
                                                columnMobile1: 'columnMobile1',
                                                columnTablet: 'columnTablet',
                                                column2Tablet: 'column2Tablet',
                                            })}
                                        >
                                            <input type="text" placeholder="Subject" spellCheck={false} />
                                        </div>
                                        <div
                                            className={cx('column', {
                                                column1: 'column1',
                                                columnMobile: 'columnMobile',
                                                columnMobile1: 'columnMobile1',
                                            })}
                                        >
                                            <textarea
                                                type="text"
                                                placeholder="Write message"
                                                spellCheck={false}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <Button className={cx('btn-submit')}>SEND A MESSAGE</Button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('wrapper-contact')}>
                <div className={cx('grid')}>
                    <div className={cx('container-contact')}>
                        <div className={cx('row', { rowMobile: 'rowMobile', rowTablet: 'rowTablet' })}>
                            <section
                                className={cx('column', {
                                    column3: 'column3',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    columnTablet: 'columnTablet',
                                    column3Tablet: 'column3Tablet',
                                })}
                            >
                                <div className={cx('wrapper-item')}>
                                    <div className={cx('icon')}>
                                        <HiOutlineMapPin />
                                    </div>
                                    <div className={cx('item-content')}>
                                        <h4>Address</h4>
                                        <p>Liên lộc, Hậu Lộc, Thanh Hóa</p>
                                    </div>
                                </div>
                            </section>
                            <section
                                className={cx('column', {
                                    column3: 'column3',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    columnTablet: 'columnTablet',
                                    column3Tablet: 'column3Tablet',
                                })}
                            >
                                <div className={cx('wrapper-item')}>
                                    <a href="tel:0395568136" className={cx('icon')}>
                                        <BsPhoneVibrate />
                                    </a>
                                    <a href="tel:0395568136" className={cx('item-content')}>
                                        <h4>Phone</h4>
                                        <p>039 556 8136</p>
                                    </a>
                                </div>
                            </section>
                            <section
                                className={cx('column', {
                                    column3: 'column3',
                                    columnMobile: 'columnMobile',
                                    columnMobile1: 'columnMobile1',
                                    columnTablet: 'columnTablet',
                                    column3Tablet: 'column3Tablet',
                                })}
                            >
                                <div className={cx('wrapper-item')}>
                                    <a href="mailto:hatriduc32@gmail.com" className={cx('icon')}>
                                        <MdOutlineAlternateEmail />
                                    </a>
                                    <a href="mailto:hatriduc32@gmail.com" className={cx('item-content')}>
                                        <h4>Email</h4>
                                        <p>hatriduc32@gmail.com</p>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.566883432771!2d105.92192131488659!3d19.94264838659662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31365d94718a0d07%3A0xa06972c4b4ca05ea!2zQ8OieSB4xINuZyBsacOqbiBs4buZYw!5e0!3m2!1svi!2s!4v1678642967239!5m2!1svi!2s"
                width="100%"
                title="map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
}

export default Contacts;
