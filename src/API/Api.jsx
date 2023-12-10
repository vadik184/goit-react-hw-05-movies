import axios from 'axios';
const apiKey = '1a5dcaecfd6daccf99bd5443101f6b7d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${apiKey}`);
  return data;
};
export const searchFilm = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
  );
  return data;
};

export const getFilm = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${apiKey}&language=en-US`
  );
  return data;
};

export const getCasts = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    console.log('Casts data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching casts', error);
    throw error;
  }
};
export const getReviews = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}/reviews?api_key=${apiKey}&language=en-US`
    );
    console.log('Casts data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching casts', error);
    throw error;
  }
};
