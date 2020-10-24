import styled from "styled-components";

export default function CtaLinkGroup({ children }) {
  return <StyledList>{children}</StyledList>;
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  font-size: 1.5rem;

  & > a + a {
    margin-top: 16px;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
`;
