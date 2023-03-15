import { theme } from "@team-entry/design_system";
import FunctionSection from "../FunctionBox/FunctionSection";
import ArticleBox from "./ArticleBox";
import styled from "styled-components";
import Banner from "./Banner";
import AcceptanceSection from "../Acceptance/AcceptanceSection";

const SchoolInfo = () => {
  return (
    <Wrapper>
      <TopSection>
        <Banner />
        <AcceptanceSection />
      </TopSection>
      <Line />
      <BottomSection>
        <FunctionSection />
        <ArticleBox name="입학 공지사항" />
        <ArticleBox name="자주 묻는 질문" />
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 1000px;
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
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Line = styled.div`
  width: 1220px;
  height: 1px;
  background-color: ${theme.color.black200};
`;

export default SchoolInfo;
