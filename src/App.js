import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar';

const Container = styled.div`
  background-color: #51555D;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.p`
  color: #f1f1f1;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  margin: 0;
`;

const Span = styled.span`
  font-weight: 500;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Title>Thiago <Span>Braga</Span></Title>
        </Navbar>

        <Title>Thiago <Span>Braga</Span></Title>
      </Container>
    )
  }
}
