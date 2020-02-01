import React from 'react';
import styled from 'styled-components';

const getHeight = ({ fullscreen }) =>
  fullscreen ? `calc(100vh - 80px)` : `auto`;

const SectionStyled = styled.section`
  width: 100%;
  height: ${getHeight};
`

/**
 * @typedef {{
 *  fullscreen: boolean;
 *  id: string;
 * }} SectionProps
 * @param {SectionProps} props
 * @description A Section element that represents a section of a view. The fullscreen prop tells whether the component should occupy the whole screen or not.
 * @returns {JSX.Element} anchor html tag
 */
const Section = ({ fullscreen, id }) => (
  <SectionStyled fullscreen={fullscreen} id={id} />
)

export default Section;