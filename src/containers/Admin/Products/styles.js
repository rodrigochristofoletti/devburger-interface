import styled from "styled-components"

export const Container = styled.div`

`;

export const ProductImg = styled.img`
    width: 90px;
    padding: 12px;
    border-radius: 25px;
`;

export const EditButton = styled.button`
    border: none;
    background-color: ${(props) => props.theme.darkWhite};
    height: 32px;
    width: 32px;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 auto;  
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: 18px;
        width: 18px;
    }

        &:hover {
            background-color: ${(props) => props.theme.purple};

             svg {
                fill: ${(props) => props.theme.white}
             };
        }
`;