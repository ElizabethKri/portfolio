import React from 'react';
import photo from "../../../assets/images/photo.webp"
import FlexWrapper from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.Name>Hello, my name is <span>Elizabeth Kritskaya</span></S.Name>
                        <S.MainTitle>A Front-End Developer</S.MainTitle>
                        <S.SmallText>I’am coding with a clean and beautiful problem solving in mind, create adaptive
                            websites where technology is combined with creativity</S.SmallText>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


