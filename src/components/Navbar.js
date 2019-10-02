import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: rgba(53,56,64,0.25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const Content = styled.div`
  width: 960px;
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Content>{this.props.children}</Content>
      </Container>
    )
  }
}
