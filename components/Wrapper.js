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
  margin: 32px auto;
  max-width: 900px;
  width: 70%;
`;
