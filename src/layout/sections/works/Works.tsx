import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/project1.webp'
import timerImg from './../../../assets/images/project3.webp'
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

// const tabsItems = ["All", "Landing page", "React", "Angular", "SPA"]

const tabsItems : Array<{status: TabsStatusType ,title: string}> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "Angular",
        status: "angular",
    },
    {
        title: "SPA",
        status: "spa",
    },
]

const worksData = [
    {
        title:"Online store of branded bags",
        src: socialImg,
        text: "\"Starbrands\" is an Italian premium brand that\n" +
            "produces leather goods. The company produces bags of the highest class\n" +
            "men's and women's collections.",
        type: "angular"
    },
    {
        title:"Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. " +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim",
        type: "react"
    },
]

 export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

     if(currentFilterStatus === "landing"){
         filteredWorks = worksData.filter(work => work.type === "landing")
     }
     if(currentFilterStatus === "react"){
         filteredWorks = worksData.filter(work => work.type === "react")
     }
     if(currentFilterStatus === "angular"){
         filteredWorks = worksData.filter(work => work.type === "angular")
     }
     if(currentFilterStatus === "spa"){
         filteredWorks = worksData.filter(work => work.type === "spa")
     }

     function changeFilterStatus (value: TabsStatusType){
         setCurrentFilterStatus(value)
     }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus = {currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((w)=>
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

