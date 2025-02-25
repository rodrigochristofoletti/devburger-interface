import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

        div{
            width: 100%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        p {
            font-size: 18px;
            color: ${(props) => props.theme.orange};
            line-height: 20px;
            font-weight: 700;
            margin-top: 40px;
        }

        strong {
            font-size: 18px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;
            padding-top: 10px;
        }
`;

export const CartImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
    
`;