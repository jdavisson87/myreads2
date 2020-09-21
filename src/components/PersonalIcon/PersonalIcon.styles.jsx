import styled from 'styled-components';
import img from '../../icons/icon.svg';

export const MyIconCtr = styled.div`
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
`;

export const MyIconImg = styled.div`
  background: url(${img});
  background-size: 100%;
  width: 135px;
  height: 135px;
  background-repeat: no-repeat;
`;
