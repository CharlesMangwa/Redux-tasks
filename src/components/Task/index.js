import React, { PropTypes } from 'react'

function Task(props) {
    const { index, name, author, completed, deleteTask } = props
    return (
      <li style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
        <strong>{name}</strong> de {author}&nbsp;
        <button
          onClick={() => deleteTask(index)}
          >
          Done
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
