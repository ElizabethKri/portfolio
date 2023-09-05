import React from 'react';
import photo from "../../../assets/images/photo.webp"
import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <Name>Hello, my name is <span>Elizabeth Kritskaya</span></Name>
                        <MainTitle>A Front-End Developer</MainTitle>
                        <SmallText>I’am coding with a clean and beautiful problem solving in mind, create adaptive
                            websites where technology is combined with creativity</SmallText>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const Photo = styled.img`
  width: 450px;
  height: 520px;
  object-fit: cover;
  margin-top: 150px;
`
const PhotoWrapper = styled.div `
    
  position: relative;
  z-index: 0;
  
  &::before {
    content: '';
    width: 460px;
    height: 570px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: 124px;
    left: 24px;
    z-index: -1;
  }
`

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #e1d0ff;
  display: flex;
`

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  
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
      bottom: 0;
      z-index: -1;
    }
  }
`
const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
  margin: 10px 0;
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;

`

