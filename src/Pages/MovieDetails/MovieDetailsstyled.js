import styled from 'styled-components';
import { TbArrowBackUp } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const MainContainer = styled('div')`
  margin-top: 25px;
  position: relative;
`;
export const BtnBack = styled('button')`
  position: absolute;
  position: fixed;
  padding: 10px;
  margin-left: 25px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  border: 5px solid indigo;
  &:hover {
    background-color: #b3d3ea;
    color: #2c5777;
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }
  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;
export const Container = styled('div')`
  display: flex;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 20px;
  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid #dfe5ed;
  background-color: #fff;
  max-width: 1100px;
  overflow: hidden;
`;
// export const MainContainer = styled('div')``;
export const Poster = styled('img')`
  max-width: 350px;
  object-fit: contain;
  box-shadow: rgba(0, 0, 0, 0.4) -12px 10px 16px 16px;
`;
export const DetailContainer = styled('div')`
  margin: 0 30px 0 30px;
  padding: 15px;
`;
export const FilmTitle = styled('h2')`
  display: flex;
  font-size: 35px;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
`;
export const DetailTitle = styled('h3')`
  font-size: 25px;
  justify-content: center;
  padding-left: 25px;
`;
export const DetailText = styled('div')`
  font-size: 20px;
  justify-content: center;
`;
export const GenresList = styled('ul')`
  display: flex;
  gap: 4px;
  padding-left: 0;
`;
export const GenresItem = styled('li')`
  display: flex;
  flex-basis: calc((100% - 3 * 35px) / 4);
`;
export const CastListStyled = styled('ul')`
  display: flex;
  margin-top: 30px;
  gap: 35px;
  padding-left: 0;
`;
export const IconBack = styled(TbArrowBackUp)`
  margin: 0 auto;
  stroke: indigo;
`;
export const ListCastRe = styled(Link)`
  font-size: 20px;
  display: flex;
  padding: 10px;
  width: 90px;
  justify-content: center;
  align-items: center;
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  &:hover {
    background-color: #b3d3ea;
    color: #2c5777;
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }
  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;
export const LoaderDiv = styled('div')`
  display: flex;
  padding: 20px;
  color: indigo;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;
