import styled from 'styled-components';
import BackgroundLogin from '../../assets/background.svg';
import BackgroundLeft from '../../assets/background-right.svg';
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  background: url('${BackgroundLeft}');
  background-color: #1e1e1e;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;

    p {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', serif;
  font-size: 40px;
  color: rgb(230, 228, 228);
  text-align: center;
  font-weight: 400;

  span {
    color: ${(props) => props.theme.purple};
    font-family: 'Road Rage', serif;
  }
 `
   

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: underline;
    font-weight: 400;
    color: #ffffff;

    &:hover {
      font-weight: 600;
      color: ${(props) => props.theme.purple};
    }
`;

