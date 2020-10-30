import styled from "styled-components";

const InfoTag = styled.p`
  display: inline-block;
  padding: 4px 16px;
  margin-bottom: ${props => (props.spacedBottom ? "64px" : "8px")};
  background: ${props => props.theme.accent};
  color: white;
  border-radius: 8px;
`;

export default InfoTag;
