import styled from 'styled-components'

export const ItemsListStyled = styled.div`
    width: ${props => props.width};
    margin: 20px auto;
    color: grey;
`

export const ItemsListHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
    border-bottom: 3px solid white;

    span{
        text-transform: uppercase;
        color: white;
        padding: 20px 20px;
        width: 100%;
        text-align: left;
    }
`

export const ButtonHeader = styled.a`
    margin: 10px 20px;
    padding: 10px 30px;
    width: 250px;
    color: transparent;
    background-color: transparent
`