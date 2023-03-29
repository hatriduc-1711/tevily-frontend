import PropTypes from 'prop-types';
import Header from '~/layout/LayoutAdmin/components/Header';

function LayoutAdmin({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

LayoutAdmin.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutAdmin;
