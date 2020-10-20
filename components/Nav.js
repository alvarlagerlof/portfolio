import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <h2>Alvar Lagerlöf hejsan</h2>
      <Links>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About me</a>
        </li>
        <li>
          <a>Work</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
      </Links>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  gap: 16px;
`;
