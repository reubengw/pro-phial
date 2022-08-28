import styled from "styled-components";
const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  background-color: white;
  height: 50px;
  top: 0;
`;

const StyledNavTab = styled.a`
  height: 50px;
  width: 120px;
  text-align: center;
  line-height: 40px;
  border: 5px solid #53091a;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <StyledNavBar id="navbar">
      <StyledNavTab href="/">Home</StyledNavTab>
      <StyledNavTab href="/projects">Projects</StyledNavTab>
      <StyledNavTab>Nudes</StyledNavTab>
      <StyledNavTab>Hobbies</StyledNavTab>
    </StyledNavBar>
  );
};

export default NavBar;
