import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 25px;
  margin-bottom: 15px;
  justify-items: center;
`;

export const Button = styled.button`
  width: 60px;
  height: 25px;
  margin-left: 15px;
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  background-color: #a7a7a7;
`;

export const ButtonText = styled.span`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #ffd9db;
`;
