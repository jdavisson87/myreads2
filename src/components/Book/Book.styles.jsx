import styled from 'styled-components';
import img from '../../icons/book.svg';

export const BookItem = styled.li`
  width: 170px;
`;

export const BookCover = styled.div`
  width: 128px;
  height: 193px;
  margin-left: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const ShelfChanger = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  right: 0;
  bottom: 20px;
  border-radius: 50%;
  background: #61dafb;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const BookTitle = styled.span`
  font-family: palatino, cursive;
  font-weight: bold;
  color: #282c34;
  font-size: 19px;
  margin: 5px;
  width: 170px;
`;

export const BookAuthor = styled.span`
  font-family: palatino, cursive;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  color: #2d79c6;
`;

export const BookIndvAuthor = styled.p`
  padding: 0;
  margin: 0;
`;
