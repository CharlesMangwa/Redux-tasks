import React from 'react'
import { IndexRoute, Route } from 'react-router'
import HomeContainer from './../containers/HomeContainer';
import AboutContainer from './../containers/AboutContainer';

const routes = (
  <Route path='/'>
    <IndexRoute path="" component={HomeContainer} />
    <Route path="/about" component={AboutContainer} />
  </Route>
)

export default routes
