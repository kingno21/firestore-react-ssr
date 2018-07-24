import App, {Container} from 'next/app'
import React from 'react'
import store from '../app/lib/store'
import compose from 'recompose/compose'
import { Provider } from 'react-redux'

class CustomApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}

export default CustomApp; 
