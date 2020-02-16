import React from "react";
import styled from "styled-components";
import Button from '../../../../components/Button'

const StyledButton = styled.div`
    grid-area: 4 / 3 / 5 / 6;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
`

const Buttons = () => {
    return (
        <StyledButton>
            <Button>Vision, Mision y Valores</Button>
            <Button>La Historia que Comienza</Button>
            <Button>Donde Hemos Estado</Button>
        </StyledButton>
        
    )
};

export default Buttons