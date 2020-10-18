import React, { Component } from 'react'

import Header from './Header'
import Meta from './Meta'

/*
  We will render components for things that need to show up on every page - eg: Header component
*/

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {/* Wrap any components with page and they render here */}
        {this.props.children}
      </div>
    )
  }
}

export default Page