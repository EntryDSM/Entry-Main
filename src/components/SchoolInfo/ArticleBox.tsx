import { theme } from "@team-entry/design_system";
import { ReactElement } from "react";
import styled from "styled-components";

interface Props<T> {
  name: string;
  list?: T[];
}

function ArticleBox<T>({ name, list }: Props<T>): ReactElement {
  return (
    <Wrapper>
      <Category>{name}</Category>
      {list?.map(() => {
        return <Notice>sadadsad</Notice>;
      })}
      <Notice>sadadsad</Notice>
      <Notice>sadadsad</Notice>
      <Notice>sadadsad</Notice>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 200px;
  overflow-y: hidden;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  width: 335px;
  height: 40px;
  ${theme.font.title2};
  color: ${theme.color.black600};
  border-bottom: ${theme.color.black300} 1px solid;
  padding-left: 10px;
`;

const Notice = styled.button`
  transition: all 0.3s;
  cursor: pointer;
  ${theme.font.body1};
  color: ${theme.color.black700};
  display: flex;
  align-items: center;
  padding-left: 5px;
  background-color: ${theme.color.realWhite};
  width: 320px;
  height: 40px;
  border: none;
  border-bottom: 1px ${theme.color.black100} solid;

  &:hover {
    background-color: ${theme.color.black50};
  }
`;

export default ArticleBox;
