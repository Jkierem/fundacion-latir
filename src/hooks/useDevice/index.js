import { useDebugValue } from 'react';
import { isBetween, lt, eq } from '@juan-utils/functions'
import useWindowSize from '../useWindowSize';

export const getDevice = (width) => {
    if( lt(426,width) ){
        return Devices.Mobile;
    } else if( isBetween(426,1024,width) ){
        return Devices.Tablet
    } else {
        return Devices.Laptop
    }
}

const Devices = {
    Mobile: "Mobile",
    Tablet: "Tablet",
    Laptop: "Laptop",
}

export const isMobile = eq(Devices.Mobile)
export const isTablet = eq(Devices.Tablet)
export const isLaptop = eq(Devices.Laptop)

const useDevice = () => {
    const [ width ] = useWindowSize();
    const dev = getDevice(width)
    useDebugValue(dev)
    return dev
}

export default useDevice