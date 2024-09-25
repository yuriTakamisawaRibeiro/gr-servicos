"use client";

import { Container, LogoContainer, NavLinks } from "./styles";
import React from "react";
import Image from 'next/image';
import logo from '../../images/logo.png';
import Link from 'next/link';
import Button from "../Button";

const Header = () => {


    const handleClick = () => {
        alert('Botão clicado!');
    };

    return (
        <Container>
            <LogoContainer>
                <Image
                    src={logo}
                    alt="Logo da Aplicação"
                    width={180}
                    height={180} 
                    style={{ objectFit: 'contain' }} 
                />
            </LogoContainer>
            <NavLinks>
                <ul>
                    <li><Link href="/" aria-label="Home">Inicio</Link></li>
                    <li><Link href="/" aria-label="Home">Sobre nós</Link></li>                 
                    <li><Link href="/contact" aria-label="Contato">Contato</Link></li>
                    <li>
                    <Button onClick={handleClick}>Fale conosco</Button>
                    </li>
                </ul>
            </NavLinks>
        </Container>
    );
};

export default Header;
