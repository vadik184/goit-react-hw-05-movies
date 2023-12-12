import styled from 'styled-components';

export const CastList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  padding-bottom: 20px;
`;
export const CastItem = styled('li')`
  width: 200px;
  height: 310px;
`;

export const PhotoContainer = styled('div')`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 5px;
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
  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid #dfe5ed;
  background-color: #fff;
  max-width: 1100px;
  overflow: hidden;
  margin-bottom: 20px;
`;
export const ActorNameDiv = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 110px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid #dfe5ed;
  background-color: rgb(225, 236, 244);
`;
export const ActorName = styled('p')`
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: rgb(57, 115, 157);
  font-size: 20px;
  margin-bottom: 15px;
`;
export const Character = styled('p')`
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: rgb(57, 115, 157);
`;
