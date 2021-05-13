/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
  // cursor: pointer;
}

html{
  box-sizing: border-box;
  font-size: 16px;
  -webkit-font-smoothing: antialised;
}
body{
  font-family: 'Roboto', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden
}

`

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000000",
    color: "#ffffff",
    red: "#ea291e",
  }
  const lightTheme = {
    background: "#ffffff",
    color: "#000000",
    red: "#ea291e",
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <Header />
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
