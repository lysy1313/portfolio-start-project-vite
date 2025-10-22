import styled from "styled-components";
import myImg from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Hi there</span>
          <h2>I am Ilya Lysy</h2>
          <h1>A Web Developer</h1>
        </div>

        <Photo src={myImg} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
