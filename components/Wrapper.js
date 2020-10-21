import styled from "styled-components";

export default function Wrapper({ children }) {
  return (
    <Background>
      <Content>{children}</Content>;
    </Background>
  );
}

const Background = styled.main`
  background: #f7f7f7;
`;

const Content = styled.main`
  margin: 32px auto;
  max-width: 900px;
  width: 70%;
`;
