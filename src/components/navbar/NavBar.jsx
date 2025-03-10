import React, { useState } from "react";
import {
    MenuToggle, Nav, NavBtn, NavLista, NavListaItem,
    NavListaItemLink, NavLogo, NavLogoLink
} from "../../styles/NavBarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleMenuClick = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <Nav> {/* Container da NavBar */}
            <NavLogo> {/* Container da img logo */}
                <NavLogoLink to="/">Hotel Ramos</NavLogoLink> {/* Link da HomePage no logo */}
            </NavLogo>

            {/* Botão de menu hamburguer */}
            <MenuToggle onClick={handleMenuClick}>
                <GiHamburgerMenu size={30} />
            </MenuToggle>

            {/* Lista de navegação */}
            <NavLista menuAberto={menuAberto}>
                <NavListaItem>
                    <NavListaItemLink to="/">Início</NavListaItemLink>
                </NavListaItem>
                <NavListaItem>
                    <NavListaItemLink to="/explore">Explore</NavListaItemLink>
                </NavListaItem>
                <NavListaItem>
                    <NavListaItemLink to="/quartos">Quartos</NavListaItemLink>
                </NavListaItem>
                <NavListaItem>
                    <NavListaItemLink to="/amenidades">Amenidades</NavListaItemLink>
                </NavListaItem>
            </NavLista>

            <NavBtn>Reserve já</NavBtn> {/* Botão de reservar quarto */}
        </Nav>
    );
}

export default NavBar;
