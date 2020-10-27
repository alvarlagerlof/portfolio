import styled from "styled-components";

const Section = styled.section`
  margin: 128px 0;

  & > p {
    margin-top: 8px;
  }

  @media screen and (max-width: 700px) {
    margin: 92px 0;
  }
`;

export default Section;
