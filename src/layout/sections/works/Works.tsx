import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import starBrand from './../../../assets/images/project1.webp'
import todo from './../../../assets/images/project3.webp'
import cinema from './../../../assets/images/project4.webp'

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
        title: "React",
        status: "react",
    },
    {
        title: "Angular",
        status: "angular",
    },
]

const worksData = [
    {
        title:"Online store of branded bags",
        src: starBrand,
        text: "\"Starbrands\" is an Italian premium brand that\n" +
            "produces leather goods. The company produces bags of the highest class\n" +
            "men's and women's collections.",
        type: "angular",
        demo: 'https://star-brands-new.vercel.app/starbrands/main',
        code: 'https://github.com/ElizabethKri/StarBrandsNew.git',
        id: 1,
    },
    {
        title:"Todolist",
        src: todo,
        text: "The Todolist app allows you to create notes. In these notes, you can add and remove tasks, change the name, and filter by completion." +
            "To log in, you need to use your username and password, which I will provide in person.",
        type: "react",
        demo: 'https://rtkquery-ten.vercel.app/login',
        code: 'https://github.com/ElizabethKri/rtkquery.git',
        id: 2,
    },
    {
        title:"TMBD cinema",
        src: cinema,
        text: "This app was created using TMDb (The Movie Database), a database with information about millions of movies and TV shows from around the world. " +
            "To load the data, you need to use a VPN.",
        type: "react",
        demo: 'https://tmdbkino-85fyrpd3f-elizabeths-projects-07424bad.vercel.app/',
        code: 'https://github.com/ElizabethKri/tmdbkino.git',
        id: 3,
    },
]

 export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

     if(currentFilterStatus === "react"){
         filteredWorks = worksData.filter(work => work.type === "react")
     }
     if(currentFilterStatus === "angular"){
         filteredWorks = worksData.filter(work => work.type === "angular")
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
                                              key={w.id}
                                              demo={w.demo}
                                              code={w.code}
                                        />
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

