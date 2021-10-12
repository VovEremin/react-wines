import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 650px;
`

const StyledTitle = styled.h1`
  font-size: 30px;
  line-height: 34px;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
  font-weight: 700;
`

const StyledSubtitle = styled.h3`
  font-size: 20px;
  line-height: 24px;
  color: grey;
  padding-top: 20px;
`

export default function Header () {
  return (
      <StyledHeader>
        <StyledTitle>Did somebody say wine?</StyledTitle>
        <StyledSubtitle>This is the wines that your virtual sommelier will recommend are kept, kind of like a wine cellar! Manage, add, update and search your portfolio here</StyledSubtitle>
      </StyledHeader>
  )
}