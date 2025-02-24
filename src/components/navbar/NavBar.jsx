import React from 'react'
import { Nav, NavBtn, NavLista, NavListaItem, NavListaItemLink, NavLogo, NavLogoLink } from '../../styles/NavBarStyles'

function NavBar() {
    return (
        <Nav>

            <NavLogo>
                <NavLogoLink to='/'>Hotel Ramos</NavLogoLink>
            </NavLogo>

            <NavLista>
                <NavListaItem>
                    <NavListaItemLink to='/'>Início</NavListaItemLink>
                </NavListaItem>

                <NavListaItem>
                    <NavListaItemLink to='/explore'>Explore</NavListaItemLink>
                </NavListaItem>

                <NavListaItem>
                    <NavListaItemLink to='/quartos'>Quartos</NavListaItemLink>
                </NavListaItem>

                <NavListaItem>
                    <NavListaItemLink to='/amenidades'>Amenidades</NavListaItemLink>
                </NavListaItem>

            </NavLista>

            <NavBtn>Reserve já</NavBtn>
        </Nav>
    )
}

export default NavBar