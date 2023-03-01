import { theme } from "@team-entry/design_system";
import styled from "styled-components";

const Banner = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 1220px;
  height: 230px;
  border-radius: 5px;
  background-color: ${theme.color.black100};
`;

export default Banner;
