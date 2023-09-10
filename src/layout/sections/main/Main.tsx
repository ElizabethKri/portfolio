import React from 'react';
import photo from "../../../assets/images/photo.webp"
import FlexWrapper from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.Name>Hello, my name is <span>Elizabeth Kritskaya</span></S.Name>
                        <S.MainTitle>A Frontend Developer</S.MainTitle>
                        <S.SmallText>
                            <p>I’am coding with a clean and beautiful problem solving in mind, create adaptive websites where technology is combined with creativity</p>
                            <Typewriter
                                options={{
                                    strings: ['I’am coding with a clean and beautiful problem solving in mind, create adaptive websites where technology is combined with creativity'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80
                                }}
                            />
                        </S.SmallText>

                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


