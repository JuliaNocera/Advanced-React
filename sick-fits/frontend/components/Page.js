import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import Header from './Header'
import Meta from './Meta'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'  // box-shadow 
}

/* Since we likely won't need to reuse these styled components, we'll leave them here in this file --> but that is def a pref  */
const StyledPage = styled.div`
  background: white;
  color: black;
`

const Inner = styled.div`
  /* Now that we have this "ThemeProvider" component, we will have access 'theme' on the props in styled components */
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

/* 
  Note: we don't have access to the props.theme in here since it is not within the ThemeProvider component
  But we have the theme here in this file, we could also export it from a different file and use it like a regular JS object, 
  which it is 
 */
injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    /* 
      rem is calculated based on the global font-size - 
      in this case we set it explicitly on html, 
      otherwise it will operate off the default font-size which is often 16px 
    */
    line-height: 2;
    font-size: 1.5rem; 
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`

/*
  What's up in here?
  * We will render components for things that need to show up on every page - eg: Header component
  * ThemeProvider --> uses React context to add the 'theme' object on props in styled components 
    * With this ThemeProvider, we could easily have various themes the user can select 
      and we could set theme in state and update the theme prop on the ThemeProvider
*/
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page