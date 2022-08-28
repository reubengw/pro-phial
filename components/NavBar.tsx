import styled from "styled-components";
const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  background-color: white;
  .sticky {
    position: fixed;
    top: 400px;
    width: 100%;
  }
`;

const StyledNavTab = styled.div`
  height: 50px;
  width: 120px;
  text-align: center;
  line-height: 40px;
  border: 5px solid #53091a;
  cursor: pointer;
`;

const styledNavContainer = styled.div``;

const NavBar = () => {
  return (
    <StyledNavBar id="navbar">
      <StyledNavTab className="nav-tab">Home</StyledNavTab>
      <StyledNavTab className="nav-tab">Projects</StyledNavTab>
      <StyledNavTab className="nav-tab">Nudes</StyledNavTab>
      <StyledNavTab className="nav-tab">Hobbies</StyledNavTab>
    </StyledNavBar>
  );
};

export default NavBar;
