import { useLayoutEffect, useState, useDebugValue } from 'react';
import { isBetween, lt } from '@juan-utils/functions'

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

// export const getDevice = () => conditional(
//     [ lt(426) , () => Devices.Mobile],
//     [ isBetween(426,1024) , () => Devices.Tablet ],
//     [ gte(1024) , () => Devices.Laptop ]
// )(window.screen.width)

export const isMobile = () => getDevice() === Devices.Mobile
export const isTablet = () => getDevice() === Devices.Tablet
export const isLaptop = () => getDevice() === Devices.Laptop