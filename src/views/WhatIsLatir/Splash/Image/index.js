import React from "react";
import styled from "styled-components";
import Icon from '../../../../components/Icon';
import logo from "../../../../resources/images/relogoslatir/512x512px.svg"

const StyledLogo = styled.div`
    grid-area: 2 / 4 / 3 / 5;
`

const Logo = () => {
    return (
        <StyledLogo><Icon src={logo} size="huge"/></StyledLogo>
    );
};

export default Logo;