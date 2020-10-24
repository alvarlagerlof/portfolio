import styled from "styled-components";

export default function Wrapper({ children }) {
  return (
    <Background>
      <Content>{children}</Content>;
    </Background>
  );
}

const Background = styled.div`
  background: #f7f7f7;
  min-height: 100vh;
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
