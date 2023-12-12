import { getReviews } from 'API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Maindiv, NotResultsText, ReList, ReText } from './ReviewsStyled';
import { Loader } from 'components/Loader/Loader';

export const Review = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const getRevs = await getReviews(id);
        setReview(getRevs);
      } catch (error) {
        console.error('Error fetching casts', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [id]);
  if (!review) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>We are loading a reviews for this movie</NotResultsText>
      </Maindiv>
    );
  }

  if (!review.results || review.results.length === 0) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>
          We don't have any reviews for this movie
        </NotResultsText>
      </Maindiv>
    );
  }

  return (
    <>
      <Maindiv>
        <ReList>
          {review.results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>
              <ReText>{content}</ReText>
            </li>
          ))}
        </ReList>
      </Maindiv>
    </>
  );
};
