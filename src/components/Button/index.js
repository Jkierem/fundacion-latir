import React from 'react';
import styled from 'styled-components';
import { Utils } from 'juanform';

import Colors from '../../utils/colors';
import Fonts from '../../utils/fonts';
import Depth from '../../utils/depth';
import { identity } from '@juan-utils/functions';

const StyledButton = styled.button`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8em;
  margin: 24px;
  border: none;
  outline: none;
  cursor: pointer;

  color: ${Colors.White.hexString};
  font-size: ${Fonts.SizeValues.Normal};
  background-color: ${Colors.getLightColorHex};
  box-shadow: ${Depth(1)};

  &:hover {
    background-color: ${Colors.getDarkColorHex};
    box-shadow: ${Depth(0)};
  }
`

/**
 * @typedef {("primary" | "secondary" | "negative" )} Theme
 * @typedef {{
 *  submit?: boolean;
 *  theme?: Theme;
 *  onClick?: (e: React.SyntheticEvent, info: any) => void;
 * }}
 * @param {ButtonProps} props
 * @description Button component. The onClick prop is overriden when inside a Form component
 */
const CustomButton = ({ onClick=identity , ...rest}) => {
  const handleClick = (e) => {
    e.preventDefault()
    onClick(e,rest)
  }
  return <StyledButton onClick={handleClick} {...rest} />
}

export default Utils.createButton(CustomButton);