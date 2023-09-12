import React from 'react';
import Icon from "../../components/icon/Icon";
import FlexWrapper from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"


const socialItemsData = [
    {
        iconId: "vk",
        href: "https://vk.com/id23136954"
    },
    {
        iconId: "instagram",
        href: "https://instagram.com/liza_kritskaya_?igshid=MmIzYWVlNDQ5Yg=="
    },
    {
        iconId: "telegram",
        href: "https://t.me/Elizabeth_Kri"
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
                            <S.SocialLink href={ic.href}>
                                <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={ic.iconId} />
                            </S.SocialLink>
                        </S.SocialItem>
                    })}

                </S.SocialList>
                <S.Copyright>@ 2023 Elizabeth Kritskaya, All Rights Reserved</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

