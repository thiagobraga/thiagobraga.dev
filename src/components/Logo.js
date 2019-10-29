import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import '../styles/components/logo.sass'

let Text
const Span = styled.span`
  font-weight: 500;
`;

class Logo extends Component {
  constructor(props) {
    super(props)

    Text = styled.span`
      color: #f1f1f1;
      font-size: 24px;
      font-weight: 200;
      margin: 0;
      ${props.large && css`
        font-size: 7rem;
      `}
    `;
  }

  render() {
    return <span className="logo">
      <Text>Thiago <Span>Braga</Span></Text>
    </span>
  }
}

export default Logo
