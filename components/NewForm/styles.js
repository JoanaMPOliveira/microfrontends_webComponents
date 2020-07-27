import styled from 'styled-components';

export const FormStyled = styled.form`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:start;
`
export const FormGroupStyled = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    label {
        padding: 10px;
        color: grey;
        font-size: 14px;
        text-transform: uppercase;
        width: 20%;
        text-align: left;
    }
    input {
        padding: 10px;
        color: grey;
        font-size: 14px;
        width: 100%;
        text-align: left;
        border: 1px solid #f0f0f0;
        box-shadow: 0 0 10px 0 grey;
        
    }
    textarea {
        padding: 10px;
        color: grey;
        font-size: 14px;
        width:100%;
        border: 1px solid #f0f0f0;
        box-shadow: 0 0 10px 0 grey;

    }
`

export const ButtonInput = styled.input`
    margin: 20px 10% 0 auto;
    padding: 10px 30px;
    width: 250px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
    color: white;
    border: 1px solid transparent;
    box-shadow: 0 0 10px 0 white;
    transition: 0.5s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.05);
    }
`