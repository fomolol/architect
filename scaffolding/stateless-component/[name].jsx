/**
 * @file {{name}}.js
 */
import React from 'react'
import PropTypes from 'prop-types'

import s from './{{name}}.module.css'

const {{name}} = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = '',
}) => {

  return (
    <Tag
      className={`${s.{{className}}} ${s[`{{className}}__${variant}`]} ${className}`}
    >
      {children}
    </Tag>
  )
}

{{name}}.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default {{name}}
