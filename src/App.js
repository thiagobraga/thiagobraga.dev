import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Logo from './components/Logo';

const Container = styled.div`
  background: #51555d url(/fog-background.png) no-repeat bottom center fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class App extends React.Component {
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

export default App
