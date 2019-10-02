import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Logo from './components/Logo';

const Container = styled.div`
  background-color: #51555D;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Logo />
        </Navbar>

        <Logo large />
      </Container>
    )
  }
}
