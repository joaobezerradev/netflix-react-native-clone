import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Logo, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo resizeMode="contain" source={logoImg} />
      <Menu>Séries</Menu>
      <Menu>Filmes</Menu>
      <Menu>Minha Lista</Menu>
    </Container>
  );
};

export default Header;
