import styled from 'styled-components';
import img from '../../icons/magnifier.svg';

export const BookShelfCtr = styled.div`
  width: 100%;
  padding: 0 0 20px;
  background-color: rgb(163, 163, 163);
`;

export const SearchIconCtr = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 1000;
  & > a {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #2d79c6;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const BookShelfTitle = styled.h2`
  font-family: palatino, cursive;
`;

export const ShelfTitle = styled.h3`
  font-family: palatino, cursive;
  color: #282c34;
`;