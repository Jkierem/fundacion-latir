import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar';

const Container = styled.div`
  width: 90%;
  height: 90%;
  margin: 0;
`

const AppContainer = (props) => {
  return(
    <Container>
      <Navbar />
      {props.children}
    </Container>
  )
}

export default AppContainer;