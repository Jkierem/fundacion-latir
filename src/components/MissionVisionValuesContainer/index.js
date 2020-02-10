import React from 'react'
import { useDevice, isLaptop } from '../../hooks';
import WideView from './WideView';
import NarrowView from './NarrowView';



const MissionVisionValuesContainer = (props) => {
  const device = useDevice();
  const laptop = isLaptop(device)
  return (
      <div>
          {
              laptop ?
              <WideView />
              :
              <NarrowView />
          }
      </div>
  )
}

export default MissionVisionValuesContainer;
