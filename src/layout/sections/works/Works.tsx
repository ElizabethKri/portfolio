import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import FlexWrapper from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/project1.webp'
import timerImg from './../../../assets/images/project3.webp'
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";

const workItems = ["All", "Landing page", "React", "Angular"]

 export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Work title={"Online store of branded bags"}
                          text={"\"Starbrands\" is an Italian premium brand that\n" +
                              "produces leather goods. The company produces bags of the highest class\n" +
                              "men's and women's collections."}
                          src={socialImg}/>
                    <Work title={"Timer"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"}
                          src={timerImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section `
    ${FlexWrapper}{
      gap: 30px;
    }
    `