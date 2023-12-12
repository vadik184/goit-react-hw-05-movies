import { searchFilm } from 'API/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FilmListContainer,
  FormContainer,
  SearchButton,
  SearchDiv,
  SearchInput,
} from './MoviesStyled';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = searchParams.get('query');
    if (!search) return;
    setIsLoading(true);

    const fetchFilms = async () => {
      try {
        setIsLoading(true);
        const searchByName = await searchFilm(search);
        setSearchResults(searchByName.results);
        if (searchByName.results.length === 0) {
          Notify.failure(
            'Unfortunately, we have no results for this search. We apologize',
            paramsForNotify
          );
        }
      } catch (error) {
        Notify.info('Enter your request, please!', paramsForNotify);
        return;
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilms();
  }, [searchParams]);

  const onSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.search.value.trim().toLowerCase();
    if (searchValue === '') return;
    setSearchParams({ query: searchValue });
    formRef.current.reset();
  };

  return (
    <>
      <SearchDiv>
        <FormContainer ref={formRef} onSubmit={onSubmit}>
          {isLoading && <Loader />}
          <SearchButton type="submit">SEARCH</SearchButton>
          <SearchInput
            type="text"
            name="search"
            placeholder="search"
            autoComplete="off"
            autoFocus
          />
        </FormContainer>
      </SearchDiv>

      <FilmListContainer>
        <FilmList films={searchResults} />
      </FilmListContainer>
    </>
  );
};

export default Movies;
