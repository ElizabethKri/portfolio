import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import FlexWrapper from "../../../components/FlexWrapper";
import {S} from "../skills/Skills_Styles"
import {Container} from "../../../components/Container";

export const About: React.FC = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>About me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"about"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section `
  background-color: #fde8fd;
  min-height: 50vh;
  
  ${S.IconWrapper}{
    margin: 20px 0 70px;
  }
`
