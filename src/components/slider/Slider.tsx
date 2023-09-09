import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../Container";

export const Slider = () => {
    return (
        <StyledSlider>
                <FlexWrapper>
                    <Slide>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</Text>
                    </Slide>
                </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
  text-align: center;
`
const Text = styled.p`
  margin: 20px 0 30px;
  display: inline-block;
`

const Pagination = styled.div`

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: rgba(121, 114, 114, 0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }

`