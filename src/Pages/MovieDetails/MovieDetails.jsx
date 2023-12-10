import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilm } from 'API/Api';
import {
  Container,
  DetailContainer,
  DetailText,
  DetailTitle,
  FilmTitle,
  GenresList,
  Poster,
} from './MovieDetailsstyled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getFilm(id);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Link to={backLink}>
          <button>Go Back</button>
        </Link>
        <Container>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />

          <DetailContainer>
            <FilmTitle>{movie.title}</FilmTitle>
            <DetailTitle>Overview</DetailTitle>
            <DetailText>{movie.overview}</DetailText>
            <DetailTitle>Genres</DetailTitle>
            <DetailText>
              <GenresList>
                {movie.genres.map(({ id, name }) => {
                  return <li key={id}>{name} /</li>;
                })}
              </GenresList>
            </DetailText>
            <div>
              <ul>
                <li>
                  <Link to={`/movies/${id}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`/movies/${id}/reviews`}>Reviews</Link>
                </li>
              </ul>
            </div>
          </DetailContainer>
        </Container>

        <Outlet />
      </div>
    </>
  );
};
