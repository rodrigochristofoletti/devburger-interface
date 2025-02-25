import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    height: 66px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;


export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;


    div {
        margin-left: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

            hr {
                height: 24px;
                border: 1px solid #9758a6;
            }
    }
`;

export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? (props) => props.theme.purple : props.theme.white};
    border-bottom: ${props => props.$isActive ? `1px solid ${(props) => props.theme.purple}` : "none"};
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;

        &:hover {
            color:  ${(props) => props.theme.purple};
        }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-right: 56px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 14px;

        P {
            color: #ffffff;
            line-height: 90%;
            font-weight: 300;

                span {
                    font-weight: 600;
                    color: ${(props) => props.theme.purple};
                }
        }
`;

export const LogOut = styled.button`
    color: ${(props) => props.theme.darkRed};
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: 0;
    transition: opacity 150ms;

        &:hover {
            opacity: 0.6;
        }
     
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

