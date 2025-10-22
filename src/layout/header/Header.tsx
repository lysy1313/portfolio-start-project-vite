import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Home", "Skills", "Works", "Tesimony", "Contact"];

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #6f6feca6;
`;

export default Header;
