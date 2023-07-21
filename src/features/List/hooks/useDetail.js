import { useMemo } from 'react';
import fligths from '../../../flights.json';
import { LOCAL_STORAGE_KEYS } from '../../../constants';

export default function useDetail(){
    const selectedFlight = useMemo(() => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_QUERY_VALUES)), []);
    
    const details = useMemo(() => 
        fligths.flights.filter(f => 
                f.originAirport.code === selectedFlight.origin 
                && f.destinationAirport.code === selectedFlight.dest), 
    [selectedFlight.dest, selectedFlight.origin]);

    return [details, selectedFlight];
}