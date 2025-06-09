import styled from "styled-components";
import Background from '../../assets/background-right.svg'


export const Container = styled.div`
background: linear-gradient(rgba(255,255,255, 0.6), rgba(255,255,255, 0.6)), url('${Background}');
height: 100vh;
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;

`;

export const Content = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 50px;
    border-radius: 8px;
    background-color: #ffffff;
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;


 h1{
    font-size: 32px;
    color: ${(props) => props.theme.secondDarkPurple};
    font-weight: 700;
    margin-bottom: 20px;
 }
`;

export const Email = styled.p`
font-weight: 700;
`;