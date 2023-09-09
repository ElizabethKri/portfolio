import styled from "styled-components";
import FlexWrapper from "../../../../components/FlexWrapper";
import Icon from "../../../../components/icon/Icon";

type SkillPropsType = {
    // iconId?: string;
    title: string;
    children?:  any
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    {props.children}
                    {/*<Icon iconId={props.iconId}/>*/}
                </IconWrapper>

                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 200px;
  flex-grow: 1;
  padding: 6px;
  

`
const SkillTitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 25px;
  text-transform: uppercase;
`

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 65px;
    height: 65px;
    background-color: rgba(191, 5, 243, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
    padding-bottom: 5px;
  }

`


