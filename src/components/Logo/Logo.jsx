import React from 'react';

import '../../styles/components/logo.sass';

export default function Logo(props) {
  const { size } = props;

  return (
    <span className={`logo ${size || ''}`.trim()}>
      Thiago <b>Braga</b>
    </span>
  );
}