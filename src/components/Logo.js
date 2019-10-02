import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  color: #f1f1f1;
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  margin: 0;
`;

const Span = styled.span`
  font-weight: 400;
`;

export default class Logo extends React.Component {
  render() {
    return <Text>Thiago <Span>Braga</Span></Text>
  }
}
