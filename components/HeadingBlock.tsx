import styled, { css } from "styled-components";
const StyledHeadingBlock = styled.div<
  Pick<HeadingBlockProps, "isFirstHeadingBlock">
>`
  color: var(--accent-dark);
  background-color: var(--primary-lighter);
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  margin: auto;
  padding: 50px;
  ${({ isFirstHeadingBlock }) =>
    isFirstHeadingBlock
      ? css`
          margin: 50px auto auto;
        `
      : ""};
`;

const StyledHeader = styled.h1`
  color: var(--accent-dark);
`;

const StyledSubHeader = styled.h5`
  color: var(--accent-light);
`;

interface HeadingBlockProps {
  isFirstHeadingBlock?: boolean;
  headerText: string;
  subheaderText?: string;
}
const HeadingBlock = ({
  headerText,
  subheaderText,
  ...props
}: HeadingBlockProps) => {
  return (
    <StyledHeadingBlock {...props}>
      <StyledHeader>{headerText}</StyledHeader>
      <StyledSubHeader>{subheaderText}</StyledSubHeader>
    </StyledHeadingBlock>
  );
};

export default HeadingBlock;
