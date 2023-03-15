import { theme } from "@team-entry/design_system";
import styled from "styled-components";

interface Props {
  icon: string;
  name: string;
}

const FunctionButton = (props: Props) => {
  return (
    <Wrapper>
      <img src={props.icon} alt="icon" />
      <p>{props.name}</p>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  cursor: pointer;
  width: 230px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid ${theme.color.black100};
  background-color: ${theme.color.realWhite};

  img {
    width: 24px;
    height: 24px;
  }

  p {
    ${theme.font.title2};
    color: ${theme.color.black800};
    font-weight: 500;
  }
`;

export default FunctionButton;
