import PropTypes from 'prop-types';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function LayoutDefault({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutDefault;
