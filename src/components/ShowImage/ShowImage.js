import classNames from 'classnames/bind';
import ImageViewer from 'react-simple-image-viewer';

import styles from './ShowImage.module.scss';

const cx = classNames.bind(styles);

function ShowImage({ showImage, handleClose }) {
    const images = [
        'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-17-600x590.jpg',
        'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-11-600x590.jpg',
        'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-16-600x590.jpg',
        'https://tevily.web4s.vn/wp-content/uploads/2021/09/tour-9-600x590.jpg',
    ];

    return (
        <section className={cx('wrapper')}>
            {showImage && (
                <ImageViewer src={images} disableScroll={false} closeOnClickOutside={true} onClose={handleClose} />
            )}
        </section>
    );
}

export default ShowImage;
