import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Movies from 'Pages/Movies/Movies';
import { HomePage } from 'Pages/Home/Home';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Review } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
