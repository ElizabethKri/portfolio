import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoAngular, BiLogoGithub, BiLogoMongodb} from "react-icons/bi";
import {theme} from "../../../styles/Theme";
import {DiCss3} from "react-icons/di";
import {FaBootstrap, FaReact} from "react-icons/fa";
import {SiJavascript, SiNestjs, SiStyledcomponents, SiTypescript} from "react-icons/si";
import {CgFigma} from "react-icons/cg";
import {BsGit, BsGithub} from "react-icons/bs";
import {IoLogoFigma} from "react-icons/io5";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container><SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill title={"html5"}>
                        <AiFillHtml5 size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"css3"}>
                        <DiCss3 size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"react"}>
                        <FaReact size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"angular"}>
                        <BiLogoAngular size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"bootstrap"}>
                        <FaBootstrap size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"nestJs"} >
                        <SiNestjs size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"js"}>
                        <SiJavascript size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"figma"}>
                        <IoLogoFigma size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"github"}>
                        <BsGithub size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"mongoDb"}>
                        <BiLogoMongodb size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"git"}>
                        <BsGit size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"styled component"}>
                        <SiStyledcomponents size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                    <Skill title={"typescript"}>
                        <SiTypescript size={50} style={{fill: `${theme.colors.icon}`}}/>
                    </Skill>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section``