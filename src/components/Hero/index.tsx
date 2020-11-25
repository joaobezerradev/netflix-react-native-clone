import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

import bannerImg from '../../assets/banner.png';

import {
  Banner,
  Button,
  Container,
  MenuHero,
  MenuTag,
  Play,
  Separator,
  Tags,
  TextButton,
  TextButtonPlay,
} from './styles';

const Hero: React.FC = () => {
  return (
    <Container>
      <Banner resizeMode="contain" source={bannerImg} />
      <Tags>
        <MenuTag>Envolvente</MenuTag>
        <Separator />
        <MenuTag>Empolgante</MenuTag>
        <Separator />
      </Tags>
      <MenuHero>
        <Button>
          <Feather name="plus" size={26} color="#fff" />
          <TextButton>Minha lista</TextButton>
        </Button>
        <Play>
          <Ionicons name="ios-play" size={26} />
          <TextButtonPlay>Assistir</TextButtonPlay>
        </Play>
        <Button>
          <Feather name="info" size={22} color="#FFF" />
          <TextButton>Saiba mais</TextButton>
        </Button>
      </MenuHero>
    </Container>
  );
};

export default Hero;
