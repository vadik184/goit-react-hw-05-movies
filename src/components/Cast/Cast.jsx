import { getCasts } from 'API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  Photo,
  CastContainer,
  PhotoContainer,
  CastItem,
  ActorNameDiv,
  ActorName,
  Character,
} from './CastStyled';
import { Maindiv, NotResultsText } from 'components/Reviews/ReviewsStyled';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        setIsLoading(true);
        const getActors = await getCasts(id);
        setActors(getActors);
      } catch (error) {
        console.error('Error fetching casts', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCasts();
  }, [id]);
  if (isLoading) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>We are loading the cast of this movie</NotResultsText>
      </Maindiv>
    );
  }
  if (!actors || !actors.cast || actors.cast.length === 0) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>
          Unfortunately, we do not have data on the cast of this film. We
          apologize
        </NotResultsText>
      </Maindiv>
    );
  }
  const unknownImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg';
  return (
    <>
      <CastContainer>
        <CastList>
          {actors.cast.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
              <PhotoContainer>
                <Photo
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : unknownImg
                  }
                  alt={name}
                  width={250}
                />
              </PhotoContainer>
              <ActorNameDiv>
                <ActorName>{name}</ActorName>
                <Character>
                  Character: <br />
                  {character}
                </Character>
              </ActorNameDiv>
            </CastItem>
          ))}
        </CastList>
      </CastContainer>
    </>
  );
};
