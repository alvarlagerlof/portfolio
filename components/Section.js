import styled from "styled-components";
import { Heading } from "./Headings";

const Section = styled.section`
  margin: 128px 0;

  & ${Heading} + p {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 700px) {
    margin: 92px 0;
  }
`;

export default Section;
