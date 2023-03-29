import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';

import styles from './ElementPhone.module.scss';
import TitleStart from '~/components/TitleStart';
import Button from '~/components/Button';
import config from '~/config';
import { loginSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function ElementPhone() {
    const isLogin = useSelector(loginSelector);

    return (
        <>
            {isLogin?.code !== 0 && (
                <section className={cx('wrapper-element-phone')}>
                    <div className={cx('grid')}>
                        <div className={cx('element-phone-container')}>
                            <div className={cx('row', { rowMobile: 'rowMobile' })}>
                                <section
                                    className={cx('column', {
                                        column2: 'column2',
                                        columnMobilePhone: 'columnMobilePhone',
                                        columnMobile1: 'columnMobile1',
                                    })}
                                >
                                    <div className={cx('container-first')}>
                                        <TitleStart subTitle="Join to us" title="Not a Member Yet?" />
                                        <p>
                                            Join us! Our members can access savings of up to 50% and earn Trip Coins
                                            while booking.
                                        </p>
                                        <div className={cx('group-btn')}>
                                            <Button
                                                to={config.routes.login}
                                                className={cx('btn-login')}
                                                icon={<BsArrowRightCircle />}
                                            >
                                                SING IN
                                            </Button>
                                            <Button
                                                to={config.routes.register}
                                                className={cx('btn-register')}
                                                icon={<FaRegUser />}
                                            >
                                                REGISTER
                                            </Button>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className={cx('column', {
                                        column2: 'column2',
                                        columnMobilePhone: 'columnMobilePhone',
                                        columnMobile1: 'columnMobile1',
                                    })}
                                >
                                    <div className={cx('container-last')}>
                                        <img
                                            src="	https://tevily.web4s.vn/wp-content/uploads/2021/10/image-app.png"
                                            alt=""
                                        />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default ElementPhone;
