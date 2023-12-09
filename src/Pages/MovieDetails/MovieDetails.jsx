import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilm } from 'API/Api';
import { Container } from './MovieDetailsstyled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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
        <Link to={'/'}>
          <button>Go Back</button>
        </Link>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />

          <div>
            <h2>{movie.title}</h2>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};
