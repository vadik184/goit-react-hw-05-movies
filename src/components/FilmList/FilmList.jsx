import React from 'react';
import {
  List,
  Item,
  Img,
  Title,
  ImgDiv,
} from 'components/FilmList/FilmListStyled';
import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ films }) => {
  const location = useLocation();

  const notFindImg =
    'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=';
  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {' '}
            <ImgDiv>
              <Img
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                    : notFindImg
                }
                width={250}
                alt="poster"
              />
              <Title>{film.title || film.name}</Title>
            </ImgDiv>
          </Link>
        </Item>
      ))}
    </List>
  );
};
