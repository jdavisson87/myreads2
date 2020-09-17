import styled from 'styled-components';
import img from '../../icons/book.svg';

export const BookItem = styled.li`
  width: 170px;
`;

export const BookCover = styled.div`
  width: 128px;
  height: 193px;
  margin-left: 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const ShelfChanger = styled.div`
  width: 40px;
  height: 40px;
  right: 0;
  border-radius: 50%;
  background: #61dafb;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
