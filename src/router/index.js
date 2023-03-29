import LayoutAdmin from '~/layout/LayoutAdmin/LayoutAdmin';
import LayoutAuth from '~/layout/LayoutAuth/LayoutAuth';
import config from '~/config';

import Admin from '~/pages/System/Admin';
import AdminUsers from '~/pages/System/AdminUsers';
import AdminTours from '~/pages/System/AdminTours';

import Home from '~/pages/Home/Home';
import Tours from '~/pages/Tours/Tours';
import TourDetail from '~/pages/Tours/TourDetail';
import ToursSearch from '~/pages/Tours/ToursSearch';
import Destination from '~/pages/Destination/Destination';
import DestinationDetail from '~/pages/Destination/DestinationDetail';
import News from '~/pages/News/News';
import NewsDetail from '~/pages/News/NewsDetail';
import Contacts from '~/pages/contacts/Contacts';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import TermsOfUse from '~/pages/TermsOfUse';
import NotFound from '~/pages/NotFound/NotFound';

const pages = [
    // admin
    { path: config.routes.admin, component: Admin, layout: LayoutAdmin },
    { path: config.routes.admin_users, component: AdminUsers, layout: LayoutAdmin },
    { path: config.routes.admin_tours, component: AdminTours, layout: LayoutAdmin },

    { path: config.routes.home, component: Home },
    { path: config.routes.tours, component: Tours },
    { path: `${config.routes.toursDetail}/:slug`, component: TourDetail },
    { path: config.routes.toursSearch, component: ToursSearch },
    { path: config.routes.destination, component: Destination },
    { path: `${config.routes.destinationDetail}/:slug`, component: DestinationDetail },
    { path: config.routes.news, component: News },
    { path: `${config.routes.newsDetail}/:slug`, component: NewsDetail },
    { path: config.routes.contacts, component: Contacts },
    { path: config.routes.termsOfUse, component: TermsOfUse },
    { path: config.routes.notFound, component: NotFound, layout: LayoutAuth },

    { path: config.routes.login, component: Login, layout: LayoutAuth },
    { path: config.routes.register, component: Register, layout: LayoutAuth },
];

export default pages;
