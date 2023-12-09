import { searchFilm } from 'API/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const search = searchParams.get('query');
    if (!search) return;

    const fetchFilms = async () => {
      try {
        const searchByName = await searchFilm(search);
        setSearchResults(searchByName.results);
      } catch (error) {
        Notify.info('Enter your request, please!', paramsForNotify);
        return;
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
      <form ref={formRef} onSubmit={onSubmit}>
        <button type="submit">SEARCH</button>
        <input
          type="text"
          name="search"
          placeholder="search"
          autoComplete="off"
          autoFocus
        />
      </form>
      <div>
        <FilmList films={searchResults} />
      </div>
    </>
  );
};

export default Movies;
