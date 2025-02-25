import styled from "styled-components";
import Texture from "../../assets/backgroundTexture.svg"
import Background from '../../assets/background-right.svg'


export const Container = styled.div`
    width: 100%;
    background-color: #f0f0f0;
   background: linear-gradient(rgba(255,255,255, 0.6), rgba(255,255,255, 0.6)), url('${Background}');
   background-size: cover;
   background-position: center;
    min-height: 100vh;
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
    display: grid;
    grid-template-columns: 1fr 29%;
    gap: 20px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`;