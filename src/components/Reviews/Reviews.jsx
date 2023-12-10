import { getReviews } from 'API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Review = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const getRevs = await getReviews(id);
        setReview(getRevs);
      } catch (error) {
        console.error('Error fetching casts', error);
      }
    };
    fetchReviews();
  }, [id]);
  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <ul>
          {review.results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
