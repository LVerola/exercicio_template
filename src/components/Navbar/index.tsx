import React from 'react';

import {
  Container,
  Link,
  Avatar,
  Bars,
  MenuContent,
} from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
        <Link to="/">
          <Avatar src="https://avatars.githubusercontent.com/u/62057819?v=4" />
        </Link>

        <Bars />

        <MenuContent>
          <Link to="/">
            Sobre mim
          </Link>

          <Link to="/projetos">
            Portfólio
          </Link>
        </MenuContent>
    </Container>
  );
}

export default Navbar;