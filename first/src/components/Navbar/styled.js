import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarElement = styled.div`

width:100%;
background-color: aqua;
padding: 36px 48px;
border-bottom: 2px solid red;
display: flex;
justify-content: space-between;

`;

export const Navigation = styled.nav`
display: flex;
max-width: 800px;


`;

export const Something = styled(NavLink)`
color: #000;
font-size: 18px;
text-decoration: none;
padding: 20px;
font-weight: bold;
`;

export const IconBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 36px;


`