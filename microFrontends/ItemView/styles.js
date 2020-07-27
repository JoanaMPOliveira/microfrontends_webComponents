import styled from 'styled-components'

export const ItemViewStyled = styled.div`
    width: 80%;
    margin: 50px auto;
    padding: 20px;
    background-color: #f0f0f0;
    span[name="title"] {
        margin: 30px 0 20px 0;
        font-size: 25px;
        font-weight: 600;
        text-transform: uppercase;
        background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    span[name="subtitle"] {
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        color: grey;
    }
    span[name="description"] {
        font-size: 16px;
        text-align: justify;
        color: grey;
    }

`

export const ItemFieldStyled = styled.div`
    padding: 10px 20px;
`

export const ItemLinkStyled = styled.a`
    font-weight: 600;
    &:hover,
    &:focus {
        background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`
export const BackToListStyled = styled.a`
    margin: 20px auto 0 10%;
    padding: 10px 30px;
    width: 250px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
    color: white !important;
    border: 1px solid transparent;
    box-shadow: 0 0 10px 0 white;
    transition: 0.5s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.05);
    }
`