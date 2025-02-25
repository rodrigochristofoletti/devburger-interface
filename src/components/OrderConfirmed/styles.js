import styled from "styled-components";
import Texture from "../../assets/backgroundTexture.svg"
import Background from '../../assets/background-right.svg'


export const Container = styled.div`
    width: 100%;
    background-color: #f0f0f0;
   background: linear-gradient(rgba(255,255,255, 0.6), rgba(255,255,255, 0.6)), url('${Background}');
   background-size: cover;
   background-position: center;
   height: 100vh;
`;

export const Banner = styled.div`
    background: url('${Texture}');
    background-color: #1f1f1f;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

        img {
            height: 150px;
        }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-top: 15px;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
    position: relative;

        &::after {
            position: absolute;
            bottom: 0;
            content: "";
            width: 56px;
            height: 4px;
            background-color: #61a120;
            left: calc(50% + -28px);
        }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`;

export const Message = styled.h1`
 color:   ${(props) => props.theme.purple};
 font-size: 33px;
 margin-top: 25px;
`; 

export const Text = styled.h1`
    font-size: 24px;
    font-weight: 400;
    width: 40%;
    text-align: center;
    margin-top: 15px;
`; 

export const Button = styled.button`
    color:   ${(props) => props.theme.purple};
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-top: 25px;
    font-weight: 600;
    font-size: 22px;
    text-decoration: underline;
    margin-bottom: 80px;

     &:hover {
        opacity: 0.8;
     }
`;

