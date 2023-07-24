import { useMemo } from 'react';
import fligths from '../../../flights.json';
import useSelectedFlight from '../../Query/components/QueryForm/hooks/useSelectedFlight';

export default function useDetail(){
    const selectedFlight = useSelectedFlight();
    
    const details = useMemo(() => 
        fligths.flights.filter(f => 
                f.originAirport.code === selectedFlight.origin 
                && f.destinationAirport.code === selectedFlight.dest), 
    [selectedFlight.dest, selectedFlight.origin]);

    return [details, selectedFlight];
}