import React from 'react';
import FlexWrapper from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoAngular, BiLogoMongodb} from "react-icons/bi";
import {theme} from "../../../styles/Theme";
import {DiCss3} from "react-icons/di";
import {FaBootstrap, FaReact} from "react-icons/fa";
import {SiJavascript, SiNestjs, SiStyledcomponents, SiTypescript} from "react-icons/si";
import {BsGit, BsGithub} from "react-icons/bs";
import {IoLogoFigma} from "react-icons/io5";
import {S} from ".//Skills_Styles"

const skillData = [
    {
        title: "html5",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: AiFillHtml5,
    },
    {
        title: "css3",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: DiCss3,
    },
    {
        title: "react",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: FaReact,
    },
    {
        title: "angular",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: BiLogoAngular,
    },
    {
        title: "bootstrap",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: FaBootstrap,
    },
    {
        title: "nestJs",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: SiNestjs,
    },
    {
        title: "js",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: SiJavascript,
    },
    {
        title: "figma",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: IoLogoFigma,
    },
    {
        title: "github",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: BsGithub,
    },
    {
        title: "mongoDb",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: BiLogoMongodb,
    },
    {
        title: "git",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: BsGit,
    },
    {
        title: "styled component",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: SiStyledcomponents
    },
    {
        title: "typescript",
        size: 50,
        style: `${theme.colors.icon}`,
        iconReact: SiTypescript
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container><SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index) =>
                    {return <Skill title={s.title}>
                        <s.iconReact size={s.size} style={{fill: s.style}}/>
                        </Skill>})}

                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

