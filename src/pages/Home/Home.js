import classNames from 'classnames/bind';
import { useLayoutEffect } from 'react';

import styles from './Home.module.scss';
import config from '~/config';
import Slider from './components/Slider';
import SearchBar from '~/components/SearchBar';
import Destinations from '~/components/Destinations';
import DestinationItem from '~/components/DestinationItem';
import ElementParis from '~/components/ElementParis';
import ElementYoutube from '~/components/ElementYoutube';
import ElementPhone from '~/components/ElementPhone';
import SliderTeam from '~/components/SliderTeam';

const cx = classNames.bind(styles);

function Home() {
    useLayoutEffect(() => {
        document.title = 'Tevily';
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className={cx('slider')}>
                <Slider />
                <SearchBar />
            </section>
            <Destinations>
                <DestinationItem
                    column
                    to={`${config.routes.destinationDetail}/morocco`}
                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-2.jpg'}
                    tours={3}
                    name={'Morocco'}
                    column4
                    columnMobile1
                />
                <DestinationItem
                    column
                    to={`${config.routes.destinationDetail}/united-kingdom`}
                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-1.jpg'}
                    tours={6}
                    name={'United Kingdom'}
                    subTitle={'Wildlife'}
                    column2
                    columnMobile1
                />
                <DestinationItem
                    column
                    to={`${config.routes.destinationDetail}/singapore`}
                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-3.jpg'}
                    tours={3}
                    name={'Singapore'}
                    column4
                    columnMobile1
                />
                <DestinationItem
                    column
                    to={`${config.routes.destinationDetail}/hungary`}
                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-4.jpg'}
                    tours={3}
                    name={'Hungary'}
                    subTitle={'Wildlife'}
                    column2
                    columnMobile1
                />
                <DestinationItem
                    column
                    to={`${config.routes.destinationDetail}/italy`}
                    img={'https://tevily.web4s.vn/wp-content/uploads/2021/09/image-5.jpg'}
                    tours={3}
                    name={'Italy'}
                    subTitle={'Adventure'}
                    column2
                    columnMobile1
                />
            </Destinations>
            <ElementParis />
            <ElementYoutube />
            <SliderTeam />
            <ElementPhone />
        </>
    );
}

export default Home;
