import Logo from './Logo';
import React from 'react';
import { create } from 'react-test-renderer';

describe('Logo component', () => {
  test('It should render Thiago Braga', () => {
    const logo = create(<Logo />);
    console.log(logo);
    return;
    expect(logo.toJSON()).toMatchSnapshot();

    const logoLg = create(<Logo size='lg' />);
    expect(logoLg.toJSON()).toMatchSnapshot();

    const logoMd = create(<Logo size='md' />);
    expect(logoMd.toJSON()).toMatchSnapshot();
  });
});
