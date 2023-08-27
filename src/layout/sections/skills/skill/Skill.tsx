import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string;
    title: string;

}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  margin-left: 20px;

`
const SkillTitle = styled.h3`

`


