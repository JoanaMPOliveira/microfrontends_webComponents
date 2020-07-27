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