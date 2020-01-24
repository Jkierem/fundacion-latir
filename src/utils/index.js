import { useLayoutEffect, useState, useDebugValue } from 'react';
import { isBetween, lt, eq } from '@juan-utils/functions'

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useLayoutEffect(() => {
    const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize',updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  useDebugValue(size)
  return size;
}

export const getDevice = (width) => {
    if( lt(426,width) ){
        return Devices.Mobile;
    } else if( isBetween(426,1024,width) ){
        return Devices.Tablet
    } else {
        return Devices.Laptop
    }
}

export const useDeviceType = () => {
    const [ width ] = useWindowSize();
    const dev = getDevice(width)
    useDebugValue(dev)
    return dev
}

export const Devices = {
    Mobile: "Mobile",
    Tablet: "Tablet",
    Laptop: "Laptop",
}

export const isMobile = eq(Devices.Mobile)
export const isTablet = eq(Devices.Tablet)
export const isLaptop = eq(Devices.Laptop)