import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Destinations.module.scss';
import TitleCenter from '~/components/TitleCenter';

const cx = classNames.bind(styles);

function Destinations({ children }) {
    return (
        <section className={cx('wrapper-destinations')}>
            <div className={cx('grid')}>
                <div className={cx('wrapper-destinations-container')}>
                    <TitleCenter subTitle="Destination lists" title="Go Exotic Places" />
                    <div
                        className={cx('row', {
                            guttersNarrow: 'guttersNarrow',
                            rowTablet: 'rowTablet',
                            rowMobile: 'rowMobile',
                        })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

Destinations.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Destinations;
