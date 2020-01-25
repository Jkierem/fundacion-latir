import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar';

const Content = styled.main`
  width: 90%;
  height: 90%;
  margin: 0;
  padding-top: 64px;
`

const Container = styled.div`
  font-family: QuinoaRound;
`

const AppContainer = (props) => {
  return(
    <Container>
      <Navbar />
      <Content>
        {props.children}
      </Content>
    </Container>
  )
}

export default AppContainer;