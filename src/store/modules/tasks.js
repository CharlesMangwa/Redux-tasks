import { fetch } from './../../utils'

const TASKS_FETCH_REQUESTED = 'TASKS_FETCH_REQUESTED'
const TASKS_FETCH_SUCCEEDED = 'TASKS_FETCH_SUCCEEDED'
const TASKS_FETCH_FAILED = 'TASKS_FETCH_FAILED'
const TASK_ADD = 'TASK_ADD'
const TASK_DELETE = 'TASK_DELETE'

const tasks = (state = [], action) => {
  switch (action.type) {
    case TASKS_FETCH_SUCCEEDED:
      action.response.forEach((task) => { console.log(task) })
      return [
        ...state,
        ...action.response
      ]
    case TASK_ADD:
      return [
        ...state,
        action
      ]
    case TASK_DELETE:
      const { index } = action
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default tasks

export const fetchTasks = () => ({
  types: [TASKS_FETCH_REQUESTED, TASKS_FETCH_SUCCEEDED, TASKS_FETCH_FAILED ],
  promise: fetch()
})

export const addTask = (name, author) => ({
  type: TASK_ADD,
  name,
  author,
  completed: false
})

export const deleteTask = (index) => ({
  type: TASK_DELETE,
  index
})
