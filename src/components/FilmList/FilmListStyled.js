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
  color: white;
`;
export const Titlediv = styled('div')`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: indigo;
`;
export const ImgDiv = styled('div')`
  width: 100%;
  height: 370px;
`;
