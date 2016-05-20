import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AboutContainer extends Component {
  render() {
    return (
      <div>
        <div>About 😎</div>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
