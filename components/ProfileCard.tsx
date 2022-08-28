import styled from "styled-components";
const StyledProfileCard = styled.div`
  width: 50%;
  height: 400px;
  margin: auto;
  padding: 50px;
  border-radius: 8px;
  background-color: var(--primary-dark);
`;

const ProfileCard = () => {
  return <StyledProfileCard></StyledProfileCard>;
};

export default ProfileCard;
