import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align="center">
        <Name>Ilya</Name>
        <SocialList>
          <SocialItems>
            <SocialItemLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId={"instagram"}
              />
            </SocialItemLink>
          </SocialItems>
          <SocialItems>
            <SocialItemLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId={"vk"}
              />
            </SocialItemLink>
          </SocialItems>
          <SocialItems>
            <SocialItemLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId={"telegram"}
              />
            </SocialItemLink>
          </SocialItems>
          <SocialItems>
            <SocialItemLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId={"linkedin"}
              />
            </SocialItemLink>
          </SocialItems>
        </SocialList>
        <Copyright>© 2025 Ilya Lysy, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
  background-color: #9318ccca;
`;

const Name = styled.span``;
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialItems = styled.li``;
const SocialItemLink = styled.a``;
const Copyright = styled.small``;
