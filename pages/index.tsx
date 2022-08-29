import type { NextPage } from "next";
import HeadingBlock from "../components/HeadingBlock";
import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeadingBlock
        isFirstHeadingBlock
        headerText="HEADER TEXT"
        subheaderText="SUBHEADER TEXT"
      ></HeadingBlock>
      <HomeContent></HomeContent>
      <HeadingBlock headerText="SECOND HEADER"></HeadingBlock>
    </div>
  );
};

export default Home;
