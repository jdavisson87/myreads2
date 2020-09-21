import styled from 'styled-components';

export const AppCtr = styled.div`
  text-align: center;
  font-family: palatino, cursive;
`;

export const LoadingCtr = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(163, 163, 163);
  display: block;
  position: fixed;
  left: auto;
  right: auto;
`;

export const LoadingText = styled.p`
  font-size: 50px;
`;

export const AppHeader = styled.div`
  height: 25%;
  width: 100%;
  display: block;
  position: fixed;
  z-index: 999;
  top: 0px;
  background-image: linear-gradient(to right, #282c34, #2d79c6);

  @media screen and (max-width: 800px) {
    height: 100px;
  }
`;

export const AppTitle = styled.h1`
  font-family: palatino, cursive;
  font-size: 75px;
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`;

export const MainCtr = styled.div`
  background-color: rgb(163, 163, 163);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const BodyCtr = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  background-color: rgb(163, 163, 163);
  top: 25%;
  @media screen and (max-width: 800px) {
    top: 100px;
  }
`;
