import styled from "styled-components";
import { theme } from "@team-entry/design_system";

const Developer = () => {
  return (
    <Wrapper>
      <Profile src="" alt="" />
      <div>
        <Name>asd</Name>
        <Field>dsadasd</Field>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Profile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: ${theme.color.black100};
`;

const Name = styled.p`
  ${theme.font.title1};
  color: ${theme.color.black800};
`;

const Field = styled.p`
  ${theme.font.title2};
  color: ${theme.color.black500};
`;

export default Developer;
