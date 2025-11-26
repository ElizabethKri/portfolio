import React from 'react';
import photo from "../../../assets/images/white.webp"
import FlexWrapper from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Tilt from 'react-parallax-tilt'

export const Main: React.FC = () => {
    return (
        <S.Main >
            <Container id={"home"} >
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.Name>Hello, my name is <span>Elizabeth Kritskaya</span></S.Name>
                        <S.MainTitle>A Frontend Developer</S.MainTitle>
                        <S.SmallText>
                            <p>I’am coding with a clean and beautiful problem solving in mind, create adaptive websites where technology is combined with creativity</p>
                            <S.TypewriterSmall
                                options={{
                                    strings: ['I’am coding with a clean and beautiful problem solving in mind, create adaptive websites where technology is combined with creativity'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80
                                }}
                            />
                        </S.SmallText>

                    </div>
                    <Tilt glareEnable={true}
                          glareMaxOpacity={0.8}
                          glareColor="#ffffff"
                          glarePosition="bottom"
                          glareBorderRadius="20px"
                    >
                        <S.PhotoWrapper >
                            <S.Photo  src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


