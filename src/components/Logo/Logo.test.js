import React from 'react'
import Logo from './Logo'
import { create } from 'react-test-renderer'

describe('Logo component', () => {
  test('It should render Thiago Braga', () => {
    const logo = create(<Logo/>)
    expect(logo.toJSON()).toMatchSnapshot()
  })
})
