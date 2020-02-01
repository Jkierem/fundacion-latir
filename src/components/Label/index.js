import React from 'react';
import styled from 'styled-components';
import { compose } from '@juan-utils/functions';
import { Utils } from 'juanform';
import Colors from '../../utils/colors';

const { createLabel } = Utils

const chooseColor = ({ theme, mode }) => {
  switch(theme){
    case "primary":
    default:
      return mode === "dark" ? 
        Colors.Primary.Dark: 
        Colors.Primary.Light;
    case "secondary":
      return mode === "dark" ? 
        Colors.Secondary.Dark: 
        Colors.Secondary.Light;
    case "negative":
      return Colors.Error
  }
}
const pickColor = compose( (obj) => obj.hexString() , chooseColor);

const pickSize = ({ size }) => {
  switch(size){
    case "huge":
      return "1.5em";
    case "big":
      return "1.17em";
    case "small":
      return ".83em";
    case "tiny":
      return ".67em";
    case "normal":
    default:
      return "1em";
  }
}

const StyledCustomLabel = styled.label`
  color: ${pickColor};
  font-size: ${pickSize};
`

/**
 * @typedef {("primary" | "secondary" | "negative")} Theme
 * @typedef {("dark" | "light")} Mode
 * @typedef {("tiny" | "small" | "normal" | "big" | "huge" )} Size
 * @typedef {{
 *  htmlFor: string;
 *  children: JSX.Element;
 *  theme?: Theme;
 *  mode?: Mode;
 *  size?: Size
 * }} LabelProps
 * @param {LabelProps} props
 * @description Label for forms
 */
const CustomLabel = ({ 
  htmlFor,
  children, 
  mode="light", 
  theme="primary", 
  size="normal",
}) => {
  return (
    <StyledCustomLabel 
      htmlFor={htmlFor}
      mode={mode}
      theme={theme}
      size={size}
    >
      {children}
    </StyledCustomLabel>
  )
}

export default createLabel(CustomLabel);