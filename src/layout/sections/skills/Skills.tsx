import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify ={"space-between"}>
                <Skill iconId={"html"} title={"html5"}/>
                <Skill iconId={"css"} title={"css3"}/>
                <Skill iconId={"react"} title={"react"}/>
                <Skill iconId={"angular"} title={"angular"}/>
                <Skill iconId={"bootstrap"} title={"bootstrap"}/>
                <Skill iconId={"nest"} title={"nestJs"}/>
                <Skill iconId={"js"} title={"js"}/>
                <Skill iconId={"figma"} title={"figma"}/>
                <Skill iconId={"github"} title={"github"}/>
                <Skill iconId={"mongoDb"} title={"mongoDb"}/>
                <Skill iconId={"git"} title={"git"}/>
                <Skill iconId={"styledComponent"} title={"styled component"}/>
                <Skill iconId={"typescript"} title={"typescript"}/>

            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section `
  background-color: #fde8fd;
`