import styled from "styled-components";
import MainSection from "../components/MainSection";
import YouTube from "react-youtube";
import { mainSectionConstant, youtubeURL } from "../constant/main";
import { theme } from "@team-entry/design_system";
import DevelopersBox from "../components/Develop/DevelopersBox";
import SchoolInfo from "../components/SchoolInfo/SchollInfo";
import { useEffect, useState } from "react";
import { fetchNotices } from "../apis/notice";
import { fetchFaQ } from "../apis/faq";
import axios from "axios";

const Main = () => {
  const [notices, setNotices] = useState([]);
  const [faqs, setFaqs] = useState([]);

  const youtubeOptions = {
    width: 976,
    height: 548,
  };

  useEffect(() => {
    axios
      .all([
        fetchNotices("ADMISSION").catch((error) => {
          console.error(`Failed! fetchNotices() ${error}`);
        }),
        fetchFaQ().catch((error) => {
          console.error(`Failed! fetchFaQ() ${error}`);
        }),
      ])
      .then(
        axios.spread((resNotice, resFaQ) => {
          setNotices(resNotice);
          setFaqs(resFaQ);
        })
      );
  }, []);

  return (
    <Wrapper>
      <SchoolInfo />
      <MainSection
        background={theme.color.black50}
        title={mainSectionConstant.SECTION_ONE}
      >
        <YouTube videoId={youtubeURL} opts={youtubeOptions} />
      </MainSection>
      <MainSection title={mainSectionConstant.SECTION_TWO}>
        <DevelopersBox />
      </MainSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
