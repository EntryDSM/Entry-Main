import styled from "styled-components";
import { theme } from "@team-entry/design_system/build/style";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  background?: string;
}

const MainSection = (props: Props) => {
  const backgroundColor = props.background ?? "#ffffff";

  return (
    <Wrapper background={backgroundColor}>
      <ContentLayout>
        <ContentTitle>{props.title}</ContentTitle>
        <>{props.children}</>
      </ContentLayout>
    </Wrapper>
  );
};

const Wrapper = styled.section<{ background: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
`;

const ContentLayout = styled.div`
  width: 1220px;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

const ContentTitle = styled.h2`
  ${theme.font.header2};
  color: ${theme.color.orange500};
`;

export default MainSection;
