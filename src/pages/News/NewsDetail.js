import classNames from 'classnames/bind';
import { useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineFolderOpen, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { FaQuoteRight } from 'react-icons/fa';

import styles from './NewsDetail.module.scss';
import config from '~/config';
import DestinationItem from '~/components/DestinationItem';
import { getNews } from '~/services/newsService';
import { newsSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function NewsDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const news = useSelector(newsSelector);
    const params = useParams();

    useEffect(() => {
        document.title = news?.title;
    }, [news]);

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) navigate('/login');
        getNews(params.slug, dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, dispatch]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('grid')}>
            <div className={cx('wrapper-news')}>
                <div className={cx('row', { rowMobile: 'rowMobile', rowTablet: 'rowTablet' })}>
                    <section
                        className={cx('column', {
                            'column3-2': 'column3-2',
                            columnMobile: 'columnMobile',
                            columnMobile1: 'columnMobile1',
                            columnTablet: 'columnTablet',
                            column1Tablet: 'column1Tablet',
                        })}
                    >
                        <div className={cx('news-detail')}>
                            <img src={news?.image} alt="" />
                            <div className={cx('admin-bussiness')}>
                                <div className={cx('admin')}>
                                    <HiOutlineUser />
                                    <span>Admin</span>
                                </div>
                                <div className={cx('bussiness')}>
                                    <HiOutlineFolderOpen />
                                    <span>Bussiness, Life Style</span>
                                </div>
                            </div>
                            <h2 className={cx('name-news')}>{news?.title}</h2>
                            <p className={cx('text')}>
                                The Spring is a passionate and determined group of monthly givers on a mission to end
                                the water crisis in our lifetime. People like you, from more than 100 countries around
                                the world, giving anything they can to prove how unstoppable we are when we work
                                together.
                            </p>
                            <h4>Clean water helps keep kids in school, especially girls.</h4>
                            <p className={cx('text')}>
                                Less time collecting water means more time in class. Clean water and proper toilets at
                                school means teenage girls don’t have to stay home for a week out of every month.
                            </p>
                            <figure>
                                <FaQuoteRight className={cx('icon-quote')} />
                                <blockquote>
                                    Before Natalia's village had a clean water tap, she often didn’t have time for
                                    school. Now, she goes to school every day and she’s the President of her local Water
                                    Committee. And she’s just getting started.
                                    <cite>said Polito</cite>
                                </blockquote>
                            </figure>
                            <h3>How do we tackle the water crisis?</h3>
                            <p className={cx('text')}>
                                We work with local experts and community members to find the best sustainable solution
                                in each place where we work, whether it’s a well, a piped system, a BioSand Filter, or a
                                system for harvesting rainwater. And with every water point we fund, our partners
                                coordinate sanitation and hygiene training, and establish a local Water Committee to
                                help keep water flowing for years to come.
                            </p>
                        </div>
                    </section>
                    <section className={cx('column', { column3: 'column3', hide: 'hide' })}>
                        <div className={cx('recent-posts')}>
                            <div className={cx('title')}>
                                <h4>Recent Posts</h4>
                            </div>
                            <div className={cx('post')}>
                                <img
                                    src="https://tevily.web4s.vn/wp-content/uploads/2020/12/post-1-180x180.jpg"
                                    alt=""
                                />
                                <div className={cx('posts-name')}>
                                    <div className={cx('comment')}>
                                        <HiOutlineChatBubbleLeftRight />
                                        <span>comment</span>
                                    </div>
                                    <h5 className={cx('name')}>Things to See and Do When Visiting Japan</h5>
                                </div>
                            </div>
                            <div className={cx('post')}>
                                <img
                                    src="https://tevily.web4s.vn/wp-content/uploads/2020/12/post-2-180x180.jpg"
                                    alt=""
                                />
                                <div className={cx('posts-name')}>
                                    <div className={cx('comment')}>
                                        <HiOutlineChatBubbleLeftRight />
                                        <span>comment</span>
                                    </div>
                                    <h5 className={cx('name')}>A Place where Start New Life with Peace</h5>
                                </div>
                            </div>
                            <div className={cx('post')}>
                                <img
                                    src="https://tevily.web4s.vn/wp-content/uploads/2020/12/post-3-180x180.jpg"
                                    alt=""
                                />
                                <div className={cx('posts-name')}>
                                    <div className={cx('comment')}>
                                        <HiOutlineChatBubbleLeftRight />
                                        <span>comment</span>
                                    </div>
                                    <h5 className={cx('name')}>Journeys are Best Measured with Friends</h5>
                                </div>
                            </div>
                        </div>
                        <div className={cx('all-categories')}>
                            <div className={cx('title')}>
                                <h4>All Categories</h4>
                            </div>
                            <ul className={cx('list-categories')}>
                                <li className={cx('item-categories')}>Bussiness</li>
                                <li className={cx('item-categories')}>Life Style</li>
                                <li className={cx('item-categories')}>Music</li>
                                <li className={cx('item-categories')}>Technology</li>
                            </ul>
                        </div>
                        <div className={cx('tag')}>
                            <div className={cx('title')}>
                                <h4>Tag</h4>
                            </div>
                            <div className={cx('group-tag')}>
                                <button className={cx('btn-tag')}>Adventure</button>
                                <button className={cx('btn-tag')}>Beach</button>
                                <button className={cx('btn-tag')}>Lifestyle</button>
                                <button className={cx('btn-tag')}>Parks</button>
                                <button className={cx('btn-tag')}>Tourisms</button>
                            </div>
                        </div>
                        <DestinationItem
                            className={cx('destination')}
                            to={`${config.routes.destinationDetail}/united-kingdom`}
                            img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-1.jpg'}
                            tours={6}
                            name={'United Kingdom'}
                            subTitle={'Wildlife'}
                            column1
                        />

                        <DestinationItem
                            className={cx('destination')}
                            to={`${config.routes.destinationDetail}/japan`}
                            img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-9.jpg'}
                            tours={3}
                            name={'Japan'}
                            column1
                        />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;
