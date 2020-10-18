import styled from "styled-components";

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

const StyledWrapper = styled.main`
  margin: 32px auto;
  max-width: 900px;
  width: 70%;
`;
