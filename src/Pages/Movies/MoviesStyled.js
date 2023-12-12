import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  display: inline-block;
  border: 6px solid #3498db;
  border-top: 6px solid #f9f9f9;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-right: 8px;
`;

export const FormContainer = styled.form`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const SearchButton = styled.button`
  background-color: indigo;
  height: 100%;
  color: white;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6f339b;
  }
  &:active {
    background-color: #1e0034;
  }
`;

export const SearchInput = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 2px solid indigo;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  outline: none;
  color: indigo;

  &::placeholder {
    color: #6f339b;
    opacity: 0.7;
  }

  &:focus {
    border-color: #6f339b;
  }
`;

export const FilmListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const FilmItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  text-align: center;
  width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
export const FilmTitle = styled.h3`
  color: #3498db;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SearchDiv = styled.div`
  height: 50px;
`;
