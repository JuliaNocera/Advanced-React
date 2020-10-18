import React from 'react'

import Nav from './Nav'

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      <p>Cart</p>
    </div>
  </div>
)

export default Header