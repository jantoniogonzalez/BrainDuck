import styled from 'styled-components';

export const InfoMain = styled.div`
    color: #000;
    background-color: ${({blueBg}) => (blueBg ? '#139dd4': '#fff')};
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-family: 'Tomorrow', sans-serif;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Paragraph = styled.p`
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #000
`