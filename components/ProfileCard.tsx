import styled from "styled-components";
import Image from "next/image";
const StyledProfileCard = styled.div`
  display: flex;
  width: 60%;
  height: 500px;
  margin: auto;
  padding: 50px;
  border-radius: 8px;
  background-color: var(--primary-dark);
`;
const StyledProfessionTitle = styled.div`
  margin-left: 20px;
  height: 200px;
  width: ;
  font-size: 40px;
  background-color: white;
`;

const ProfileCard = () => {
  return (
    <StyledProfileCard>
      <Image
        src="https://placekitten.com/400/400"
        alt="profile picture"
        width={400}
        height={400}
      ></Image>
      <StyledProfessionTitle>Job title</StyledProfessionTitle>
      <div></div>
    </StyledProfileCard>
  );
};

export default ProfileCard;
