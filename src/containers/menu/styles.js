import styled from 'styled-components';
import BannerMenu from '../../assets/banner-menu.svg'
import Background from '../../assets/background-right.svg'
import { Link } from 'react-router-dom'

export const Container = styled.section`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;
background: linear-gradient(rgba(255,255,255, 0.6), rgba(255,255,255, 0.6)), url('${Background}');


`

export const Banner = styled.div`
height: 420px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: url('${BannerMenu}') no-repeat;
background-size: cover;
background-position: center;
background-color:rgb(92, 92, 92);
position: relative;


    h1 {
        font-family: 'Road Rage', serif;
        font-size: 80px;
        color: #f4f4f4;
        line-height: 65px;
        letter-spacing: 1.2px;
        font-weight: 400;
        position: absolute;
        right: 18%;
    }

    span {
        display: block;
        color: #f4f4f4;
        font-size: 20px;
        line-height: 80px;
        letter-spacing: 0px;
    }
`;



export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${ (props) => props.$isActiveCategory ? " #9758a6 " : "rgb(82, 82, 82) "};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 8px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && "4px solid #9758a6"};
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 70px auto 0;

`
export const ButtonWrapper = styled.div `
   grid-column: span 1/3;
    display: flex;
    justify-content: center;
`;
