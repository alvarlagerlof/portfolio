import styled from "styled-components";

const ItemGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 32px;
  list-style-type: none;
`;

export default ItemGrid;
