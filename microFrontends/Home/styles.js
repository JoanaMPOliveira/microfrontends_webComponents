import styled from 'styled-components';

export const HomeStyled = styled.div`
    width: 100%;
    min-height: calc(100vh - 95px);
    background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const LabelBlue = styled.span`
    background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`