import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconsId?: string;
  text?: string;
  title?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconsId} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: #648fb4;
  margin: 1px;
`;

const SkillTitle = styled.h3``;

const SkillText = styled.p``;
