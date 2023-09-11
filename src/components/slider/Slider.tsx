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
    <Slide text ={"In 2020, I graduated from St. Petersburg State University of Transport of Emperor Alexander the First with a degree in Accounting, Analysis and Audit. After graduating from the university, I started career in the field of audit, which takes into account the attractiveness and accuracy to the verification of financial statements."}/>,
    <Slide text ={"In 2022, I decided to pick a new direction in my career as a front-end developer. With this, I went for retraining at Peter the Great St. Petersburg Polytechnic University, where I acquired basic concepts and later developed knowledge in frameworks."}/>,
    <Slide text ={"In fact, I am a versatile person, I like to get useful information for me and plan my time. I also try to find time to spend for various leisure activities: I visit museums and exhibitions, wine and cheese tastings, pottery, etc. "}/>
];

export const Slider: React.FC = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);


