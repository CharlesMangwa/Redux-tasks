const SET_VISIBILITY = 'SET_VISIBILITY'

const visibility = (state = [], action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      const { filter } = action
      return filter
    default:
      return 'All'
  }
}

export default visibility

export const setVisibilityFilter = (filter) => {
  switch (filter) {
    case 'All':
      return {
        type: SET_VISIBILITY,
        filter,
      }
    case 'Active':
      return {
        type: SET_VISIBILITY,
        filter: false,
      }
    case 'Completed':
      return {
        type: SET_VISIBILITY,
        filter: true,
      }
    default:
      return {
        type: SET_VISIBILITY,
        filter: 'All',
      }
  }
}
