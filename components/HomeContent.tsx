import styled from "styled-components";
import ProfileCard from "./ProfileCard";
const StyledHomeContent = styled.div`
  background-color: #c9ada7;
  padding: 50px 0;
`;

const HomeContent = () => {
  return (
    <StyledHomeContent>
      <ProfileCard></ProfileCard>
    </StyledHomeContent>
  );
};

export default HomeContent;
