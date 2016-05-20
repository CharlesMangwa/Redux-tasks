import React, { PropTypes } from 'react'

function FilterLink(props) {
  const { filter, setVisibilityFilter } = props
  return(
    <span><a onClick={() => setVisibilityFilter(filter)} href="#">{filter}</a>&nbsp;|&nbsp;</span>
  )
}

FilterLink.propTypes = {
  filter: PropTypes.string,
  setVisibilityFilter: PropTypes.func,
}

FilterLink.defaultProp = {
  filter: 'All',
}

export default FilterLink
