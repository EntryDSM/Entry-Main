import { theme } from "@team-entry/design_system";
import ArticleBox from "./ArticleBox";
import styled from "styled-components";
import Banner from "./Banner";

const SchoolInfo = () => {
  return (
    <Wrapper>
      <TopSection>
        <Banner />
      </TopSection>
      <BottomSection>
        <ArticleBox name="입학 공지사항" />
        <ArticleBox name="자주 묻는 질문" />
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 120px;
  background-color: ${theme.color.realWhite};
`;

const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const BottomSection = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default SchoolInfo;
