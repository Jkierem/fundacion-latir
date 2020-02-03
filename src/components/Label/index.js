import React from 'react';
import styled from 'styled-components';
import { Utils } from 'juanform';
import Colors from '../../utils/colors';
import Fonts from '../../utils/fonts';

const { createLabel } = Utils


const StyledCustomLabel = styled.label`
  color: ${Colors.getColorHex};
  font-size: ${Fonts.pickFontSize};
`

/**
 * @typedef {("primary" | "secondary" | "negative")} Theme
 * @typedef {("dark" | "light")} Mode
 * @typedef {("tiny" | "small" | "normal" | "big" | "huge" | "largest" )} Size
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