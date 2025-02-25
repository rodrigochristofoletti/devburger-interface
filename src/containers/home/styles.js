import styled from 'styled-components';
import BannerHome from '../../assets/home-banner.svg'
import Background from '../../assets/background-right.svg'

export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 420px;

    h1 {
        font-family: 'Road Rage', serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
        font-weight: 400;
    }
`;

export const Container = styled.section`
background: linear-gradient(rgba(255,255,255, 0.6), rgba(255,255,255, 0.6)), url('${Background}');
height: 100%;
background-size: cover;
background-position: center;

`

export const Content = styled.div`
padding-bottom: 10px;
padding-top: 10px;
`