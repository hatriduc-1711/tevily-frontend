import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './ShowVideo.module.scss';

const cx = classNames.bind(styles);

const ShowVideo = forwardRef(({ prop }, ref) => {
    return (
        <section className={cx('wrapper')}>
            <iframe
                {...prop}
                ref={ref}
                src="https://www.youtube.com/embed/IMiZ_KS9jBE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </section>
    );
});

export default ShowVideo;
