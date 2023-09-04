import React from 'react';
import photo from "../../../assets/images/photo.webp"
import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <h2>Hello,  my name is Elizabeth Kritskaya</h2>
                    <h1>A Front-End Developer</h1>
                    <span>I’am coding with a clean and beautiful problem solving in mind, create adaptive websites where technology is combined with creativity</span>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img `
  width: 550px;
  height: 630px;
  object-fit: cover;
  margin-top: 150px;
`

const StyledMain = styled.section `
  min-height: 100vh;
  background-color: #e1d0ff;
`


