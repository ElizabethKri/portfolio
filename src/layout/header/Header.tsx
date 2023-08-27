import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "About", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #fde8fd;
  display: flex;
  justify-content: space-between;
`
