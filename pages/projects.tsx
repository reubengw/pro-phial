import type { NextPage } from "next";
import HeadingBlock from "../components/HeadingBlock";
import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";

const Projects: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeadingBlock
        isFirstHeadingBlock
        headerText="I make cool projects"
        subheaderText="pls give me a hire if u like them"
      ></HeadingBlock>
      <HomeContent></HomeContent>
    </div>
  );
};

export default Projects;
