import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #80848B;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <Container />
    )
  }
}
