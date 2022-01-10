import React from 'react'

import PropTypes from 'prop-types'

const SolidButton = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
      }}
    >
      <button
        style={{
          color: 'var(--dl-color-gray-white)',
          border: 'none',
          paddingTop: 'var(--dl-space-space-halfunit)',
          paddingLeft: 'var(--dl-space-space-doubleunit)',
          borderRadius: '50px',
          paddingRight: 'var(--dl-space-space-doubleunit)',
          paddingBottom: 'var(--dl-space-space-halfunit)',
          backgroundColor: 'var(--dl-color-primary-100)',
        }}
      >
        {props.button}
      </button>
    </div>
  )
}

SolidButton.defaultProps = {
  button: 'Button',
}

SolidButton.propTypes = {
  button: PropTypes.string,
}

export default SolidButton
