import styled from "styled-components";
import { Subtitle } from "./Headings";

const Header = styled.header`
  & > ${Subtitle} {
    max-width: 90%;
  }
`;

export default Header;
