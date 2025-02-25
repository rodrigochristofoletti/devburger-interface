import styled from "styled-components";

export const ProductImg = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 30px;
            color: #fff;
            border-radius: 4px;
            background-color: ${(props) => props.theme.purple};
            transition: all 0.3s;
            border: none;

            &:hover {
                background-color: ${(props) => props.theme.secondDarkPurple};
            }
        }
`;

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const TotalPrice = styled.p`
    font-weight: bold;
`;

export const BinButton = styled.button`
 cursor: pointer;
 border: none;
 background-color: transparent;

 .trash-icon {
    height: 25px;
    width: 25px;
    color: #9e1c00;
   

    &:hover {
       color:rgb(255, 52, 6);
       height: 28px;
       width: 25px;
    }
 }

   
`

