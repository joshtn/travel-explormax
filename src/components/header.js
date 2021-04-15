import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = () => {
  const [showBurger, setShowBurger] = useState(false)
  const [navCol, setNavCol] = useState(false)

  useEffect(() => {
    if (window.location.pathname) {
      setNavCol(window.location.pathname)
    }
  }, [])

  return (
    <Nav>
      <NavLink to="/" navCol={navCol}>
        EXPLORMAX
      </NavLink>
      <Bars
        showBurger={showBurger}
        navCol={navCol}
        onClick={() => setShowBurger(!showBurger)}
      >
        <div />
        <div />
        <div />
      </Bars>
      <BurgerLinks showBurger={showBurger}>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/trips/">Trips</Link>
          </li>
          <li>
            <Link to="/careers/">Careers</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </BurgerLinks>

      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index} navCol={navCol}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primaryarg="true" roundarg="true" to="/trips">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: ${({ navCol }) => (navCol !== "/" ? "#F26A2E" : "#fff")};
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;

    :focus {
      outline: none;
    }

    div {
      width: 1.5rem;
      height: 0.2rem;
      background: ${({ navCol }) => (navCol !== "/" ? "#141414" : "#fff")};
      border-radius: 5px;
      transform-origin: 1px;
      position: relative;
      transition: opacity 300ms, transform 300ms;

      :first-child {
        transform: ${({ showBurger }) =>
          showBurger ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${({ showBurger }) => (showBurger ? "0" : "1")};
      }

      :nth-child(3) {
        transform: ${({ showBurger }) =>
          showBurger ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`

const BurgerLinks = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    background: #f26a2e;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({ showBurger }) =>
      showBurger ? "translateX(0)" : "translateX(100%)"};

    ul {
      list-style-type: none;
    }

    li {
      margin-top: 1rem;
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 1.5rem;
      transition: color 300ms;

      :hover {
        color: #6ab4ff;
      }
    }
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
