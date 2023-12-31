import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import Typewriter from "typewriter-effect";

const Main = styled.section`
  min-height: 100vh;
  background-color: #e1d0ff;
  display: flex;
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  
  @media ${theme.media.mobile}{
    width: 310px;
    height: 380px;
  }
`

const TypewriterSmall =styled(Typewriter) `
  height: 55px;
`
const PhotoWrapper = styled.div `
    
  position: relative;
  z-index: 0;
  
  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
    @media ${theme.media.mobile}{
      width: 314px;
      height: 414px;
      top: -25px;
      left: 20px;
    }
  }

  @media ${theme.media.mobile}{
    margin-top: 30px;
  }
`
const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
  //font-family: 'Josefin Sans', sans-serif;
  //font-weight: 700;
  //font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0 ;
  
  span{
    position: relative;
    z-index: 0;
    width: max-content;
    display: block;
    &::before{
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      
      position: absolute;
      bottom: -7px;
      z-index: -1;
    }
  }
  
  @media ${theme.media.mobile}{
    margin: 15px 0 22px;
  }
`
const MainTitle = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 20})}
  //font-weight: 400;
  //font-size: 27px;
  margin: 10px 0;
  
`
const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
  width: 348px;
  height: 55px;

  
  p{
    display: none;
  }
`

export const S= {
  Main,
  Photo,
  PhotoWrapper,
  Name,
  MainTitle,
  SmallText,
  TypewriterSmall
}