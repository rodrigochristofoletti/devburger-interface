import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vw;
    background-color: ${(props) => props.theme.black};
    position: relative;

     img {
        width: 70%;
        margin: 40px auto;
     }
`;

export const NavLinksContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 22px;
    margin-top: 10px;
    padding: 12px 20px;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-size: 20px;
    background-color: ${ props => props.$isActive ? props.theme.purple : 'transparent'};

    &:hover {
        background-color: ${(props) => props.theme.purple};
    }
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 280px;
    min-width: 220px;
`;

