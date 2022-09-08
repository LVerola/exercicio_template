import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ICard {
  children: ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Card;