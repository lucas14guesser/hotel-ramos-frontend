import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    text-align: center;
`
export const SubcontainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1px solid #000000;
    margin: 2rem 20rem 0 20rem;
`
export const FooterInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    text-align: start;
`
export const FooterInfosTxt = styled.p`
    font-size: 1rem;
    color: #000000;
    font-style: italic;
    margin-block-start: 0;
    margin-block-end: 0;
`
export const FooterSocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`
export const FooterSocialMediaLink = styled(Link)`
    font-size: 1.5rem;
    color: #000000;
    text-decoration: none;
    transition: .2s ease-in;

    &:hover {
        color: #857F00;
    }
`
export const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    text-align: start;
`
export const FooterContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
export const FooterContactInput = styled.input`
    width: 255px;
    padding: .5rem;
    border: 1px solid #000000;
    outline: none;
    background-color: #E6E6E6;
`
export const FooterContactBtn = styled.button`
    width: 273px;
    padding: .5rem;
    background-color: #000000;
    color: #FFFFFF;
    border: 1px solid #000000;
    cursor: pointer;
`
export const ContainerFooterCopy = styled.p`
    font-size: .9rem;
    color: #000000;
    margin: 2rem 0;
`