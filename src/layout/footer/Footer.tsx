import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import FlexWrapper from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Elizabeth</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>@ 2023 Elizabeth Kritskaya, All Rights Reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #faddfa;
  min-height: 20vh;
  
`

const SocialList = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  cursor: pointer;
  

`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Name = styled.span`

`

const Copyright = styled.small`

`