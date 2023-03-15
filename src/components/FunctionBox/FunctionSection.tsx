import styled from "styled-components";
import { functionList } from "../../constant/functionList";
import FunctionButton from "./FuctionButton";

const FunctionSection = () => {
  return (
    <Wrapper>
      {functionList.map((item, index) => {
        return <FunctionButton name={item.name} icon={item.icon} key={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default FunctionSection;
