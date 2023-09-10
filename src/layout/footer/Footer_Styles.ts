import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";


const Footer = styled.footer`
  background-color: ${theme.colors.headerFooter};
  padding: 40px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;

  margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  background-color: ${theme.colors.primaryBg};
  opacity: 0.7;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover{
    color: ${theme.colors.font};
    transform: translateY(-4px);
  }
`

const Name = styled.span`
  
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    Name,
    Copyright
}