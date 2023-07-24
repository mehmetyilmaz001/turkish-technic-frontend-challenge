import { useMemo } from "react";
import { LOCAL_STORAGE_KEYS } from "../../../../../constants";

export default function useSelectedFlight(){
    const selectedFlight = useMemo(() => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_QUERY_VALUES)), []);
    return selectedFlight;
}