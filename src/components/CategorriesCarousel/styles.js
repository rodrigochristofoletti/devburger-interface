import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div `
overflow-x: hidden;
    

    .react-multi-carousel-list {
        overflow: visible;
    }

    .carousel-item{
        padding-right: 40px;
    }

    padding-left: 40px;

    .react-multiple-carousel__arrow--right {
        font-weight: 800;
    right: 18px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;}

.react-multiple-carousel__arrow--left {
    font-weight: 800;
    position: absolute;
    left: -24px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
    
`;

export const Title = styled.h2 `
    font-size: 32px;
    color: ${(props) => props.theme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    padding-top: 10px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.purple};

    }
`;

export const ContainerItems = styled.div `
    background: url('${(props) => props.ImageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;
`;

export const CategoryButton = styled(Link)`
     color: #ffffff;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 3px 30px;
            border-radius: 30px;
            font-size: 22.5px;
            font-weight: bold;
            margin-top: 90px;
            font-weight: 500;
            text-decoration: none;

             &:hover {
                background-color: #9758a6;
             }
`;