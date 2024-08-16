import styled from 'styled-components';

export const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  list-style: none;
`;
export const Item = styled('li')`
  width: 250px;
  border-radius: 15px;
  overflow: hidden;
`;

export const LinkA = styled('a')`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: scale(0.2);
  }
`;

export const Img = styled('img')`
  display: block;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled('p')`
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: transparent;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  &:hover {
    padding-bottom: 20px;
    padding-top: 300px;
    background: linear-gradient(
      0deg,
      rgba(34, 34, 51, 0.85) 20%,
      rgba(34, 34, 51, 0) 80%
    );
    font-size: 20px;
    font-weight: 900;
    color: white;
    height: auto;
  }
`;
export const ImgDiv = styled('div')`
  width: 100%;
  position: relative;
  height: 370px;
  overflow: hidden;
`;
export const Titlediv = styled('div')`
  height: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
