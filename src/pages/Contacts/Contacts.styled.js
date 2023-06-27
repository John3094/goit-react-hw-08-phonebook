import styled from 'styled-components';
import img from '../../image/backround-image-open.jpg';

export const ContainerContacts = styled.div`
  width: 100%;
  height: 85vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1199px) {
    background-position: center;
  }
  @media screen and (min-width: 1200px) {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  @media (min-width: 1200px) {
    width: 560px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const TitleBook = styled.h1`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #ffd9db;
`;

export const TitleList = styled.h2`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #ffd9db;
`;
