import styled from "styled-components";

export const ContainerQuartos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`
export const TituloQuartos = styled.p`
    font-size: 1.2rem;
    opacity: .5;
    font-style: italic;
    width: 66.5%;
`
export const SubcontainerQuartos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #000000;
    width: 66.5%;
    padding: 1rem 0;
    justify-content: space-between;
`
export const TxtQuartos = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;
    opacity: .5;
`
export const ContainerTxtQuartos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;

    > ${TxtQuartos} + ${TxtQuartos} {
        margin-top: 1rem;
    }
`
export const ListaQuartos = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 25px;
`
export const ItemListaQuartos = styled.li`
    opacity: .5;
`
export const ContainerPrecoQuartos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    gap: 1rem;
`
export const BotaoMaisInfoQuartos = styled.button`
    width: 185px;
    padding: .7rem;
    background: #000000;
    color: #FFFFFF;
    border: 1px solid #000000;
    font-size: 1.29rem;
    cursor: pointer;
`