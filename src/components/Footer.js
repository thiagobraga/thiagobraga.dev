import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background-color: rgba(53,56,64,0.45);
  height: 400px;
`;

class Footer extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default Footer
