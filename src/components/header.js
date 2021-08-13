import React from "react"
import { Link } from "gatsby"

import { HeaderNav, Menu, Logo } from "../styles/headerStyle"
import { Container, Flex } from "../styles/globalStyle"

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Header = () => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "light",
      })
    } else {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "dark",
      })
    }
  }

  return (
    <HeaderNav>
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">MO</Link>
            <span onClick={toggleTheme}></span>
            <Link to="/">N</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
