import { getTrending } from 'API/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useState } from 'react';
import { useEffect } from 'react';

export const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const trndingFilms = await getTrending();
        setFilms(trndingFilms.results);
      } catch (error) {
        console.error(error.massage);
      }
    };
    fetchFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <FilmList films={films} />
    </>
  );
};
