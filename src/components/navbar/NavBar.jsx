import React, { useState } from 'react'
import { MenuToggle, Nav, NavBtn, NavLista, NavListaItem, NavListaItemLink, NavLogo, NavLogoLink } from '../../styles/NavBarStyles'
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleMenuCLick = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <Nav> {/* Container da NavBar */}

            <NavLogo> {/* Container da img logo */}
                <NavLogoLink to='/'>Hotel Ramos</NavLogoLink> {/* Link da HomePage no logo */}
            </NavLogo>

            <MenuToggle onClick={() => handleMenuCLick()}>
                <GiHamburgerMenu size={30} />
            </MenuToggle>

            <NavLista> {/* Lista da NavBar */}
                <NavListaItem> {/* Itens da lista da NavBar */}
                    <NavListaItemLink to='/'>Início</NavListaItemLink> {/* Link da HomePage */}
                </NavListaItem>

                <NavListaItem> {/* Itens da lista da NavBar*/}
                    <NavListaItemLink to='/explore'>Explore</NavListaItemLink> {/* Link da ExplorePage */}
                </NavListaItem>

                <NavListaItem> {/* Itens da lista da NavBar*/}
                    <NavListaItemLink to='/quartos'>Quartos</NavListaItemLink> {/* Link da QuartosPage */}
                </NavListaItem>

                <NavListaItem> {/* Itens da lista da NavBar*/}
                    <NavListaItemLink to='/amenidades'>Amenidades</NavListaItemLink> {/* Link da AmenidadesPage */}
                </NavListaItem>

            </NavLista>

            <NavBtn>Reserve já</NavBtn> {/* Botão de reservar quarto */}
        </Nav>
    )
}

export default NavBar