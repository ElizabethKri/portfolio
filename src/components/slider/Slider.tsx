import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles"
import "./../../styles/slider.css"

type SlidePropsType = {
    text: string,
}

const Slide = (props: SlidePropsType) =>{
    return  (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
        </S.Slide>
    )
}

const items = [
    <Slide text ={"In 2020, I graduated from the St. Petersburg State University of Railways of Emperor Alexander First with a degree in Accounting, Analysis and Audit. After graduating from the university, I started career in the field of audit, which takes into account the attractiveness and accuracy to the verification of financial statements."}/>,
    <Slide text ={"In 2022, I decided to try myself in a new direction as a frontend developer. I enrolled for retraining at Peter the Great St. Petersburg Polytechnic University, where she received basic concepts and further deepened knowledge in frameworks."}/>,
    <Slide text ={"In fact, I am a versatile person, I like to study useful information for myself and plan my time. I also try to find time to spend my leisure time: I visit museums and exhibitions, wine and cheese tastings, pottery, etc."}/>
];

export const Slider: React.FC = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);


