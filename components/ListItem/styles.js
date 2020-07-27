import styled from 'styled-components';

export const ListItemStyled = styled.div`
    background-color: #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width:100%;
    border-bottom: 3px solid white;
`
export const ItemButtonStyled = styled.a`
    margin: 10px 20px;
    padding: 10px 30px;
    width: 250px;
    height: auto;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    background: white;
    color: #00a1e4;
    border: 1px solid transparent;
    box-shadow: 0 0 10px 0 lightgrey;

    &:hover,
    &:focus {
        background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
        color: white!important;
        border: 1px solid transparent;
        box-shadow: 0 0 10px 0 white;
    };
`;

export const ItemColumnStyled = styled.div`
    text-align: left;
    width: 100%;
    padding: 0 20px;
`