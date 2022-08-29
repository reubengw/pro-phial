import styled from "styled-components";
import ProfileCard from "./ProfileCard";
const StyledHomeContent = styled.div`
  background-color: #c9ada7;
  padding: 50px 0;
  border-top: 2px solid var(--accent-light);
  border-bottom: 2px solid var(--accent-light);
`;

const HomeContent = () => {
  return (
    <StyledHomeContent>
      <ProfileCard></ProfileCard>
    </StyledHomeContent>
  );
};

export default HomeContent;
