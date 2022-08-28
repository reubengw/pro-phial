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
        headerText="Reuben GOETZ WYLLIE"
        subheaderText="the best developer in existing!! hello world"
      ></HeadingBlock>
      <HomeContent></HomeContent>
      <HeadingBlock headerText="SECOND HEADER"></HeadingBlock>
    </div>
  );
};

export default Home;
