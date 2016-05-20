import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import store from './store/create'
import { Router, Route, browserHistory } from 'react-router'

const Kernel = () => (
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      />
  </Provider>
)

ReactDOM.render(<Kernel />, document.getElementById('root'));
