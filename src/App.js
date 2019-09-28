import React from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
  background-color: #80848B;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  background-color: #80848B;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.p`
  color: #f1f1f1;
  font-size: 32px;
  text-align: center;
  margin: 0;
`;

const Span = styled.span`
  font-weight: bold;
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
