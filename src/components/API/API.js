import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTVkY2FlY2ZkNmRhY2NmOTliZDU0NDMxMDFmNmI3ZCIsInN1YiI6IjY1NzJmNDNmMDA2YjAxMDBlMWE5NWJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k5yrfOcoA2FiHMjRDeX3nvC629h7N42z5x2dPqKqon8',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
