import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

//Menu

const MenuItem = styled.li`
  position: relative;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.accent};
  
  & + & {
    top: 50%;
    span {
    display: inline-block;
    transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
  font-family: 'Joserif Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;

  &::before{
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  

    &:hover, &.active {
      &::before{
        transform: scale(1);
      }
    
    ${Mask}{
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`



//Mobile Menu

const MobileMenu = styled.nav``
const MobileMenuPopup = styled.div<{isOpen: boolean}>`

  position: fixed;
  background-color: rgba(240, 207, 248, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
const BurgerButton = styled.button <{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before{
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
    `}
    }
    &::after{
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
    `}
    }
  }
`

//Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    padding-right: 20px;
    list-style: none;
    cursor: pointer;
    justify-content: center;
  }
`

export const S = {
    NavLink,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}