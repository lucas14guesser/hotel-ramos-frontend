import React from 'react'
import { ContainerAmenidades, ItemListaAmenidades, ListaAmenidades, SubcontainerAmenidades, TituloAmenidades, TxtAmenidades } from '../styles/AmenidadesStyles'

function Amenidades() {
    return (
        <ContainerAmenidades> {/* Container column */}
            <TituloAmenidades>Amenidades e Serviços</TituloAmenidades> {/* Titulo Container */}

            <SubcontainerAmenidades> {/* Container row */}
                <img src="/assets/area-lazer 1.png" alt="Foto da área de lazer" />
                <TxtAmenidades>Venha curtir com sua família no Hotel Ramos. Temos muitas amenidades e serviços para deixar sua experiência incrível e extremamente agradável.</TxtAmenidades>
            </SubcontainerAmenidades>

            <SubcontainerAmenidades> {/* Container row */}
                <ListaAmenidades>
                    <ItemListaAmenidades>Restaurante premiado</ItemListaAmenidades>
                    <ItemListaAmenidades>Spa e piscina coberta</ItemListaAmenidades>
                    <ItemListaAmenidades>Academia e personal trainning</ItemListaAmenidades>
                    <ItemListaAmenidades>Salas de reunião</ItemListaAmenidades>
                    <ItemListaAmenidades>Serviço de concierge</ItemListaAmenidades>
                    <ItemListaAmenidades>Wi-fi gratuito</ItemListaAmenidades>
                    <ItemListaAmenidades>Quartos com varandas privadas</ItemListaAmenidades>
                    <ItemListaAmenidades>Sweeping city views</ItemListaAmenidades>
                    <ItemListaAmenidades>Coleção de belas artes</ItemListaAmenidades>
                    <ItemListaAmenidades>Água mineral - contemplar</ItemListaAmenidades>
                    <ItemListaAmenidades>Animais de estimação permitidos</ItemListaAmenidades>
                </ListaAmenidades>
                <img src="/assets/area-piscina 2.png" alt="Foto da área da piscina" />
            </SubcontainerAmenidades>
        </ContainerAmenidades>
    )
}

export default Amenidades