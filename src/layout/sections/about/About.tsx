import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import FlexWrapper from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About me</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={"about"}/>
                </IconWrapper>
            <Slider/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section `
  background-color: #fde8fd;
  min-height: 50vh;
  
  ${IconWrapper}{
    margin: 20px 0 70px;
  }
`
