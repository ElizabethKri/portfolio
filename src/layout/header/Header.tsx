import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import FlexWrapper from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Home", "Skills", "Works", "About", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #faddfa;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9999;
`
