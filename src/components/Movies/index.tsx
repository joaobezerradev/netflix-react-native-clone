/* eslint-disable react/prop-types */
import React from 'react';

import movie1Img from '../../assets/movie1.jpg';
import movie2Img from '../../assets/movie2.jpg';
import movie3Img from '../../assets/movie3.jpg';
import movie4Img from '../../assets/movie4.jpg';

import {
  Container,
  Label,
  MovieCard,
  MoviePoster,
  MovieScroll,
} from './styles';

interface MoviesProps {
  label: string;
}

const Movies: React.FC<MoviesProps> = ({ label }) => {
  const items = [movie1Img, movie2Img, movie3Img, movie4Img];
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {items.map((movie, item) => (
          <MovieCard key={String(item)}>
            <MoviePoster resizeMode="cover" source={movie} />
          </MovieCard>
        ))}
      </MovieScroll>
    </Container>
  );
};

export default Movies;
