import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  color: #f1f1f1;
  font-size: 24px;
  font-weight: 200;
  margin: 0;
`;

const Span = styled.span`
  font-weight: 300;
`;

class Logo extends React.Component {
  render() {
    return <Text>Thiago <Span>Braga</Span></Text>
  }
}

export default Logo
