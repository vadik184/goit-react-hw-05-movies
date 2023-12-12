import { getTrending } from 'API/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useState } from 'react';
import { useEffect } from 'react';
import { HomeStyled } from './Homestyled';

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
      <HomeStyled>Trending today</HomeStyled>
      <FilmList films={films} />
    </>
  );
};
