import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

     *{
        color: ${(props) => props.theme.secondBlack};
        font-weight: 500;
     }

     .container-top {
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas: 
        "title title"
        "items items-price"
        "delivery delivery-fee";
        

        .title {
            grid-area: title;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            background-color: #484848;
            color: #ffffff;
            width: 100%;
            padding: 14px;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }

        .items {
            grid-area: items;
            padding-left: 20px;
        }

        .items-price {
            grid-area: items-price;
            padding-right: 20px;
        }

        .delivery {
            grid-area: delivery;
            padding-left: 20px;
        }

        .delivery-fee {
            grid-area: delivery-fee;
            padding-right: 20px;
        }

       
     }

     .container-bottom {
        display: flex;
        justify-content: space-between;
        padding: 0 20px 0 20px;
        font-size: 20px;
        font-weight: 700;
        margin-top: 24px;

        * {
            color: ${(props) => props.theme.secondBlack};
            font-weight: 700;
        }
     }
`;

export const Button = styled.button`

`;