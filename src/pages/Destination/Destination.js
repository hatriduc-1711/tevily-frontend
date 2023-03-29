import { useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from '~/components/Slider';
import config from '~/config';
import Destinations from '~/components/Destinations';
import DestinationItem from '~/components/DestinationItem';
import ElementYoutube from '~/components/ElementYoutube';
import ElementPhone from '~/components/ElementPhone';
import { getAllDestinations } from '~/services/destinationService';
import { allDestinationSelector } from '~/redux/selectors';

function Destination() {
    const dispatch = useDispatch();
    const listDestinations = useSelector(allDestinationSelector);

    useEffect(() => {
        getAllDestinations(dispatch);
    }, [dispatch]);

    useLayoutEffect(() => {
        document.title = 'Destination';
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Slider namePage="Destination" />
            <Destinations>
                {listDestinations?.map((destination) => (
                    <DestinationItem
                        key={destination._id}
                        to={`${config.routes.destinationDetail}/${destination.slug}`}
                        img={destination.image}
                        tours={destination.tourNumber}
                        name={destination.name}
                        column
                        column4={destination.column4}
                        column2={destination.column2}
                        columnMobile1
                    />
                ))}
                <DestinationItem hot={true} column column4 columnMobile1 />
            </Destinations>
            <ElementYoutube />
            <ElementPhone />
        </>
    );
}

export default Destination;
