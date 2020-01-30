import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import Colors from '../../utils/colors';

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 6px;
    color: ${Colors.White.hexString()}
`

const LinkStyle = styled.a`
    padding: 6px;
    color: inherit;
    text-decoration: none;
    font-size: 1em;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const Link = ({ to , children , text , replace }) => {
    const history = useHistory();
    const handleClick = () => replace ? history.replace(to) : history.push(to);
    return <LinkWrapper>
        <LinkStyle onClick={handleClick}>{children || text}</LinkStyle>
    </LinkWrapper>
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    text: PropTypes.string,
    to: PropTypes.string.isRequired,
    replace: PropTypes.bool,
}

export default Link;