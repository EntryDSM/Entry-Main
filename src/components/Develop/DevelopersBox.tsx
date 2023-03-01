import { useState } from "react";
import styled from "styled-components";
import Developer from "./Developer";

interface developerType {}

const DevelopersBox = () => {
  const [developers, setDevelopers] = useState<developerType[]>([]);

  return (
    <Wrapper>
      {developers.map((dev, index) => {
        return <Developer />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1220px;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  row-gap: 40px;
  column-gap: 60px;
  flex-wrap: wrap;
`;

export default DevelopersBox;
