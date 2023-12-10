import styled from 'styled-components';

export const CastList = styled('ul')`
  display: flex;
  max-width: 1000px;
  flex-wrap: wrap;
  gap: 20px;
`;
export const CastItem = styled('li')`
  width: 200px;
`;

export const PhotoContainer = styled('div')`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Photo = styled('img')`
  width: 200px;
  height: auto;

  object-fit: cover;
`;

export const CastContainer = styled('div')`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 20px;
  background-color: yellowgreen;
  max-width: 1000px;
  overflow: hidden;
`;
