import styled from 'styled-components';
import img from '../../icons/home.svg';

export const SearchCtr = styled.div`
  width: 100%;
  background-color: rgb(163, 163, 163);
`;

export const HomeIconCtr = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 1000;

  & > a {
    display: block;
    background: #2d79c6;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export const QueryCtr = styled.input`
  width: 80%;
  font-size: 30px;
`;
