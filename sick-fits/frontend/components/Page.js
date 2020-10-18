import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Meta from './Meta'

// We'll eventually add this to a different file so we can export and import them 
const MyButton = styled.button`
  background: red;
  font-size: ${(props) => props.huge ? '100px' : '50px'};

  /* you can also pass a value in the prop */
  color: ${(props) => props.color ? props.color : 'yellow'};

  /* 
    you can target an element inside the MyButton component by the tag, like 'span' 
  */
  span {
    font-size: 100px;
  }

  /* You could add a classname if you want as well or instead */
  .BigNerd {
    font-size: 150px;
  }
`

/*
  We will render components for things that need to show up on every page - eg: Header component
*/

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton huge color="purple">
          <span className="BigNerd">🤓</span>
          Click me
          <span>💩</span>
        </MyButton>
        <MyButton>
          <span className="BigNerd">🤓</span>
          Click me
          <span>💩</span>
        </MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Page