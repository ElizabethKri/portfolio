import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/project1.webp'
import timerImg from './../../../assets/images/project3.webp'
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

const workItems = ["All", "Landing page", "React", "Angular"]

const workData = [
    {
        title:"Online store of branded bags",
        src: socialImg,
        text: "\"Starbrands\" is an Italian premium brand that\n" +
            "produces leather goods. The company produces bags of the highest class\n" +
            "men's and women's collections."
    },
    {
        title:"Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"
    },
]

 export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w)=>
                        {
                            return <Work title={w.title}
                                         text={w.text}
                                         src={w.src}/>
                        }
                    )}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

