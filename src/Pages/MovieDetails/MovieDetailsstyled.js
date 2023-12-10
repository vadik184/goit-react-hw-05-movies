import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 20px;
  background-color: yellowgreen;
  max-width: 1000px;
  overflow: hidden;
`;
// export const MainContainer = styled('div')``;
export const Poster = styled('img')`
  max-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.4) -12px 10px 16px 16px;
`;
export const DetailContainer = styled('div')`
  margin: 0 30px 0 30px;
  padding: 15px;
  /* background-color: blueviolet; */
`;
export const FilmTitle = styled('h2')`
  display: flex;
  font-size: 35px;
  justify-content: center;
  /* background-color: red; */
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
`;
export const DetailTitle = styled('h3')`
  font-size: 25px;
  justify-content: center;
  /* background-color: red; */
  padding-left: 25px;
`;
export const DetailText = styled('p')`
  font-size: 20px;
  justify-content: center;
`;
export const GenresList = styled('ul')`
  display: flex;
  gap: 4px;
  padding-left: 0;
  list-style: none;
`;
export const GenresItem = styled('li')`
  display: flex;
`;
