import styled from 'styled-components';
import img from '../../image/backround-image.jpg';

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: auto;
  @media screen and (max-width: 1199px) {
    background-position: center;
  }
  @media screen and (min-width: 1200px) {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
