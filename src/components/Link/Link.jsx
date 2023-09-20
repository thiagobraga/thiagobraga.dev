import React from 'react';

export default function Link(props) {
  const { href, children } = props;

  return (
    <a href={href} rel='noopener noreferrer' target='blank'>
      {children}
    </a>
  );
}
