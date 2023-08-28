import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import FlexWrapper from "../../../components/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About me</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
            <Icon iconId={"about"}/>
            <Slider/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section `
  background-color: #fde8fd;
  min-height: 50vh;
`
