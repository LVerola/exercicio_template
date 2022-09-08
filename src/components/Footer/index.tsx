import React from 'react';

import {
  Container,
  DevelopedContent,
  DevelopedText,
  DevText,
  LinksContent,
  Facebook,
  Instagram,
  Github,
  Linkedin,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <DevelopedContent>
        <DevelopedText>
          Desenvolvido por 
        </DevelopedText>

        <DevText>
          Luis Gabriel Verola Santos
        </DevText>
      </DevelopedContent>

      <LinksContent>
        <a href="https://www.facebook.com/luis.gabriel.796" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>

        <a href="https://www.instagram.com/luis_verola/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>

        <a href="https://github.com/LVerola" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>

        <a href="https://www.linkedin.com/in/lverola/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </LinksContent>
    </Container>
  );
}

export default Footer;