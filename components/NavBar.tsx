import styled from "styled-components";
const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  padding-left: 10%;
  width: 100%;
  color: white;
  font-size: 20px;
  background-color: var(--primary-light);
  height: 50px;
  top: 0;
  /* border-bottom: 3px solid var(--accent-light); */
`;

const StyledNavTab = styled.a`
  height: 42px;
  width: 110px;
  margin: 0 25px;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  cursor: pointer;
  :hover {
    border-bottom: 3px solid var(--accent-light);
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar id="navbar">
      <div></div>
      <StyledNavTab href="/">Home</StyledNavTab>
      <StyledNavTab href="/projects">Projects</StyledNavTab>
      <StyledNavTab>Nudes</StyledNavTab>
      <StyledNavTab>Hobbies</StyledNavTab>
    </StyledNavBar>
  );
};

export default NavBar;
