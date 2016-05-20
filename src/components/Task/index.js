import React, { PropTypes } from 'react'

function Task(props) {
    const {name, author, index, deleteTask } = props
    return (
      <li>
        <strong>{name}</strong> de {author}
        <button onClick={() => deleteTask(index)}>
          Remove
        </button>
      </li>
    )
}

Task.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  index: PropTypes.number,
  deleteTask: PropTypes.func,
}

Task.defaultProp = {
  name: 'Welcome',
  author: 'World',
}

export default Task
