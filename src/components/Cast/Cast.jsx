import { getCasts } from 'API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  Photo,
  CastContainer,
  PhotoContainer,
  CastItem,
} from './CastStyled';

export const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const getActors = await getCasts(id);
        setActors(getActors);
      } catch (error) {
        console.error('Error fetching casts', error);
      }
    };

    fetchCasts();
  }, [id]);
  if (!actors) {
    return <div>Loading...</div>;
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

              <p>{name}</p>
              <p>Character: {character}</p>
            </CastItem>
          ))}
        </CastList>
      </CastContainer>
    </>
  );
};
