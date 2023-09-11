import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/project1.webp'
import timerImg from './../../../assets/images/project3.webp'
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"
import {AnimatePresence, motion} from "framer-motion";

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
        type: "angular",
        id: 1,
    },
    {
        title:"Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. " +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 2,
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
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus = {currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w)=>
                            {
                                return (
                                    <motion.div style = {{width: "440px", flexGrow: 1, maxWidth: "540px"}}
                                        layout={true}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        key={w.id}
                                    >
                                        <Work title={w.title}
                                              text={w.text}
                                              src={w.src}
                                              key={w.id}/>
                                    </motion.div>
                                )
                            }
                        )}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

