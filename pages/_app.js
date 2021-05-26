import NextApp from 'next/app'
import React from 'react'
import '../styles/globals.css'
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components'
const theme = {
  primary: 'green',
}
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    )
  }
}
