import styled from "styled-components";

export default function Wrapper({ children }) {
  return (
    <Background>
      <Content>{children}</Content>;
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  background: linear-gradient(
    180deg,
    ${props => props.theme.backgroundTop} 200px,
    ${props => props.theme.backgroundBottom} 1500px
  );
  background-size: 50px;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 32px 16px;
  max-width: 1200px;
  width: 70%;

  @media screen and (max-width: 1000px) {
    padding: 32px 64px;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    padding: 32px 24px;
  }
`;
