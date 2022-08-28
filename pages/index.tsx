import type { NextPage } from "next";
import Typography from "../components/Typography";
import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import Content from "../components/Content";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Heading></Heading>
      <Content></Content>
    </div>
  );
};

export default Home;
``;
