import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import promiseMiddleware from './middlewares/promiseMiddleware'
import tasks from './modules/tasks'

const middlewares = applyMiddleware(
  reduxThunkMiddleware,
  promiseMiddleware
)

const store = createStore(
  combineReducers({ tasks }),
  {},
  compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
