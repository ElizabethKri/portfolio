import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import FlexWrapper from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/project1.webp'
import timerImg from './../../../assets/images/project3.webp'
import {Menu} from "../../../components/menu/Menu";

const workItems = ["All", "Landing page", "React", "Angular"]

 export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={workItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Online store of branded bags"}
                      text={"\"Starbrands\" is an Italian premium brand that\n" +
                    "produces leather goods. The company produces bags of the highest class\n" +
                    "men's and women's collections."}
                      src={socialImg}/>
                <Work title={"Timer"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"}
                      src={timerImg}/>
            </FlexWrapper>

        </StyledWorks>
    );
};

const StyledWorks = styled.section `
  min-height: 60vh;
  background-color: #e1d0ff;
    `