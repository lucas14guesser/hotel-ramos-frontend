import styled from "styled-components";

export const ContainerAmenidades = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
`
export const TituloAmenidades = styled.p`
    font-size: 1.2rem;
    opacity: .5;
    font-style: italic;
    width: 66.5%;
    border-bottom: 1px solid #000000;
`
export const SubcontainerAmenidades = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 66.5%;
    padding: 1rem 0;
    gap: 2rem;
    justify-content: center;
`
export const TxtAmenidades = styled.p`
    font-size: 1.2rem;
    margin-block-start: 0;
    margin-block-end: 0;
    opacity: .5;
    width: 20%;
    margin-left: 5rem;
`
export const ListaAmenidades = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    margin-right: 17rem;
    margin-left: 5rem;
`
export const ItemListaAmenidades = styled.li`
    opacity: .5;
    font-size: 1.2rem;
`