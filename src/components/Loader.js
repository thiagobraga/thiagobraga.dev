import React from 'react'
import '../styles/components/loader.sass'

export default function Loader() {
  return (
    <svg className="loader">
      <circle fill="#fff" stroke="none" cx="6" cy="6" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"/>
      </circle>

      <circle fill="#fff" stroke="none" cx="26" cy="6" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"/>
      </circle>

      <circle fill="#fff" stroke="none" cx="46" cy="6" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"/>
      </circle>
    </svg>
  )
}
