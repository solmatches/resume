import ReactGA from 'react-ga4';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAnalytics(): void {
    const location = useLocation();

    useEffect(() => {
        const isProduction = process.env.NODE_ENV === 'production';
        const trackingID = process.env.REACT_APP_TRACKING_ID;

        if (isProduction && trackingID) {
            ReactGA.initialize(trackingID);
        }
    }, []);

    useEffect(() => {
        const currentPath = `${location.pathname}${location.search}`;
        ReactGA.set({ hitType: 'pageview', page: currentPath });
    }, [location]);
}
