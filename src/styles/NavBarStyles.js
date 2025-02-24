import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const NavLogo = styled.h1`
    font-size: 1.5rem;
    font-weight: 0;
    border-left: 1px solid #000;
    width: 2rem;
    margin-right: 5rem;
    padding-left: .5rem;
    text-transform: uppercase;
`
export const NavLogoLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`
export const NavLista = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 1.3rem;
    margin-left: 12rem;
`
export const NavListaItem = styled.li`
    font-size: 1.1rem;
`
export const NavListaItemLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    transition: .2s ease-in;

    &:hover {
        color: #857F00;
    }
    
    &:focus {
        color: #857F00;
    }
`
export const NavBtn = styled.button`
    width: 200px;
    color: #000000;
    padding: .5rem;
    border: 1px solid #000000;
    text-transform: uppercase;
    background-color: #E6E6E6;
    margin-left: 2rem;
    cursor: pointer;
`