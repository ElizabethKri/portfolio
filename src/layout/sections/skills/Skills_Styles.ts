import styled from "styled-components";


const Skills = styled.section`
    position: relative;
`

const Skill = styled.div`
  width: 150px;
  flex-grow: 1;
  padding: 5px;
`
const SkillTitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 25px;
  text-transform: uppercase;
  text-align: center;
`

const IconWrapper = styled.div`
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

export const S ={
    Skills,
    Skill,
    SkillTitle,
    IconWrapper,
}