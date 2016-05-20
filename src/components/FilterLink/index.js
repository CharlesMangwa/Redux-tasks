import React, { PropTypes } from 'react'

function FilterLink(props) {
  const { filter, text, active, setVisibilityFilter } = props
  return(
    <span>
      <a
        onClick={() => setVisibilityFilter(filter)}
        href="#"
        style={{
          textDecoration: filter == active ? 'none' : 'underline',
          color: filter == active ? 'black' : 'blue'
        }}
      >
        {text}
      </a>&nbsp;|&nbsp;
    </span>
  )
}

FilterLink.propTypes = {
  setVisibilityFilter: PropTypes.func,
}

FilterLink.defaultProp = {
  filter: false,
}

export default FilterLink
