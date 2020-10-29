import { Info } from "luxon";
import styled from "styled-components";

const InfoTag = styled.p`
  display: inline-block;
  padding: 2px 8px;
  margin-bottom: ${props => (props.spacedBottom ? "64px" : "8px")};
  background: ${props => props.theme.accent};
  color: white;
  border-radius: 99px;
`;

export default InfoTag;
