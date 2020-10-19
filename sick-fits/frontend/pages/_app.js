import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'

import Page from '../components/Page'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    /*
      This is a special method from next.js 
      that runs before the first render.
      Whatever is returned from this function
      goes onto props.
    */
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // This is neccessary for server side rendering
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

// Using withData makes the apollo client via this.props
export default withData(MyApp)

