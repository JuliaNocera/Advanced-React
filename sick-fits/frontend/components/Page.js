import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Meta from './Meta'

const StyledPage = styled.div`
  background: white;
  color: black;
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: red;
`

/*
  We will render components for things that need to show up on every page - eg: Header component
*/
class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <Inner>
          {this.props.children}
        </Inner>
      </StyledPage>
    )
  }
}

export default Page