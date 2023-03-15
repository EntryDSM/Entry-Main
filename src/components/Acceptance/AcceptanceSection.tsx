import { theme } from "@team-entry/design_system";
import { useState } from "react";
import styled, { css } from "styled-components";
import { contactText } from "../../constant/acceptance";

const AcceptanceSection = () => {
  const [status, setStatus] = useState("지금은 원서제출 기간입니다");

  return (
    <Wrapper>
      <AcceptanceBox>
        <StatusText>{status}</StatusText>
        <ContactNumber>{contactText}</ContactNumber>
        <AcceptButton>원서 접수 →</AcceptButton>
      </AcceptanceBox>
      <StatusGraph>
        <StatusCircle>
          <TextAria>
            <strong>원서 제출</strong>
            <p>10/20 ~ 12/30</p>
          </TextAria>
        </StatusCircle>
        <StatusCircle>
          <TextAria></TextAria>
        </StatusCircle>
        <StatusCircle>
          <TextAria></TextAria>
        </StatusCircle>
        <StatusCircle>
          <TextAria></TextAria>
        </StatusCircle>
      </StatusGraph>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AcceptanceBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusText = styled.h1`
  ${theme.font.header1};
  color: ${theme.color.black900};
`;

const ContactNumber = styled.p`
  ${theme.font.title2};
  color: ${theme.color.black600};
  margin-top: 5px;
`;

const AcceptButton = styled.button`
  width: 350px;
  height: 65px;
  ${theme.font.header2};
  color: ${theme.color.realWhite};
  border-radius: 5px;
  margin-top: 20px;
  background-color: ${theme.color.orange500};
  border: 1px solid ${theme.color.orange500};
`;

const StatusGraph = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 620px;
  height: 4px;
  border-radius: 100px;
  background-color: ${theme.color.black100};
  margin-top: 60px;
  margin-right: 65px;
`;

const StatusCircle = styled.div<{ isStatus?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: ${theme.color.black100};
  border-radius: 100px;

  ${(props) =>
    props.isStatus &&
    css`
      width: 22px;
      height: 22px;
      background-color: ${theme.color.orange500};
    `}
`;

const TextAria = styled.div`
  position: absolute;
  top: -90px;
  width: 150px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.orange500};
  border-radius: 8px;

  strong {
    ${theme.font.title2};
    color: ${theme.color.realWhite};
  }

  p {
    ${theme.font.body1};
    color: ${theme.color.orange100};
  }
`;

export default AcceptanceSection;
