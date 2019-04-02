import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <button
      disabled={active}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      style={{
        marginLeft: '4px',
      }}
    >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link;
