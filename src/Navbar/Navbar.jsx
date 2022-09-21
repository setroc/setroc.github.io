import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components"

export const Navbar = () => {
  return (
    <>
      <NavBar>
        <Title>SETROC :)</Title>

        <ul>
          <li>
            <LinkStyled end to="/">Sobre mi</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/projects">Proyectos</LinkStyled>
          </li>
        </ul>
      </NavBar>
      <Outlet />
    </>
  )
}

// Styled Components
const NavBar = styled.nav`
  width: 100%;
  background-color: var(--amethyst--very--darken);
  margin-top: 20px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    margin-right: 15px;
    align-items: center;
    li {
      list-style: none;
    }
  }
`;
const Title = styled.h1`
  font-size: 2.4rem;
  color: var(--white);
  font-weight: bold;
  margin-left: 15px;
  cursor: default;
`;
const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  font-size: 1.8rem;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 300;

  &.active{
    color: var(--amethyst);
  }
  &:hover {
    background-color: var(--amethyst--darken);
  }
`;