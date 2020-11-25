import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';

import posterImg from '../../assets/poster.jpg';

import { Container, Gradient, Poster } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Poster source={posterImg}>
        <Gradient
          locations={[0, 0.2, 0.6, 0.93]}
          colors={[
            `rgba(0, 0, 0, 1)`,
            `rgba(0, 0, 0, 0)`,
            `rgba(0, 0, 0, 0)`,
            `rgba(0, 0, 0, 1)`,
          ]}
        >
          <Header />
          <Hero />
        </Gradient>
      </Poster>
      <Movies label="Recomendados" />
      <Movies label="Top 10" />
    </Container>
  );
};

export default Home;
