import React from 'react'
import { ContainerFooter, ContainerFooterCopy, FooterContact, FooterContactBtn, FooterContactForm, FooterContactInput, FooterInfos, FooterInfosTxt, FooterSocialMedia, FooterSocialMediaLink, SubcontainerFooter } from '../../styles/FooterStyles'
import { FaTwitter, FaTripadvisor, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    const getDate = () => {
        return new Date().getFullYear();
    }

    return (
        <ContainerFooter>
            <SubcontainerFooter>
                <FooterInfos>
                    <FooterInfosTxt>
                        AV. Gov. Celso Ramos, 154
                        <br />
                        Porto Belo, SC 12345-678 | 0-800-000-0000
                    </FooterInfosTxt>

                    <FooterSocialMedia>
                        <FooterSocialMediaLink to='https://x.com/?lang=en' target='_blank'>
                            <FaTwitter />
                        </FooterSocialMediaLink>

                        <FooterSocialMediaLink to='https://www.tripadvisor.com.br/' target='_blank'>
                            <FaTripadvisor />
                        </FooterSocialMediaLink>
                        
                        <FooterSocialMediaLink to='https://www.facebook.com/?locale=pt_BR' target='_blank'>
                            <FaFacebookF />
                        </FooterSocialMediaLink>
                        
                        <FooterSocialMediaLink to='https://www.instagram.com/' target='_blank'>
                            <FaInstagram />
                        </FooterSocialMediaLink>
                        
                    </FooterSocialMedia>
                </FooterInfos>

                <FooterContact>
                    <FooterContactForm>
                        <FooterInfosTxt>Entre em contato conosco</FooterInfosTxt>
                        <FooterContactInput type="text" placeholder='Insira seu e-mail aqui' />
                        <FooterContactBtn>Participar</FooterContactBtn>
                    </FooterContactForm>
                </FooterContact>
            </SubcontainerFooter>

            <ContainerFooterCopy> &copy; {getDate()} por Lucas Guesser</ContainerFooterCopy>
        </ContainerFooter>
    )
}

export default Footer