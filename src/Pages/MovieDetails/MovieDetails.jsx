import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilm } from 'API/Api';
import {
  BtnBack,
  CastListStyled,
  Container,
  DetailContainer,
  DetailText,
  DetailTitle,
  FilmTitle,
  GenresList,
  IconBack,
  ListCastRe,
  LoaderDiv,
  MainContainer,
  Poster,
} from './MovieDetailsstyled';
import { Loader } from 'components/Loader/Loader';
import { NotResultsText } from 'components/Reviews/ReviewsStyled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getFilm(id);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <LoaderDiv>
        {isLoading && <Loader />}
        <NotResultsText>We are loading movies</NotResultsText>
      </LoaderDiv>
    );
  }
  return (
    <>
      <MainContainer>
        {isLoading && (
          <LoaderDiv>
            <Loader />
          </LoaderDiv>
        )}
        <Link to={backLink} state={location}>
          <BtnBack type="button">
            <IconBack size="40" />
          </BtnBack>
        </Link>
        <Container
          backgroundImage={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        >
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <ul>
            <DetailContainer>
              <li>
                <FilmTitle>{movie.title}</FilmTitle>
              </li>
              <li>
                <DetailTitle>Overview</DetailTitle>{' '}
                <DetailText>{movie.overview}</DetailText>
              </li>

              <li>
                <DetailTitle>Genres</DetailTitle>

                <GenresList>
                  {movie.genres.map(({ id, name }) => {
                    return <DetailText key={id}>{name} /</DetailText>;
                  })}
                </GenresList>
              </li>
              <li>
                <div>
                  <CastListStyled>
                    <li>
                      <ListCastRe to={`/movies/${id}/cast`}>Cast</ListCastRe>
                    </li>
                    <li>
                      {
                        <ListCastRe to={`/movies/${id}/reviews`}>
                          Reviews
                        </ListCastRe>
                      }
                    </li>
                  </CastListStyled>
                </div>
              </li>
            </DetailContainer>
          </ul>
        </Container>

        <Outlet />
      </MainContainer>
    </>
  );
};
