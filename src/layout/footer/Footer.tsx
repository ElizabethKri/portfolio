import React from 'react';
import Icon from "../../components/icon/Icon";
import FlexWrapper from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"


const socialItemsData = [
    {
        iconId: "vk",
    },
    {
        iconId: "instagram",
    },
    {
        iconId: "telegram",
    },
]

export const Footer : React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Elizabeth</S.Name>
                <S.SocialList>

                    {socialItemsData.map((ic, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={ic.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}

                </S.SocialList>
                <S.Copyright>@ 2023 Elizabeth Kritskaya, All Rights Reserved</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

