import styled from 'styled-components';

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.bgColors.nav};
    color: ${({ theme }) => theme.fontColors.nav};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    margin-top: -90px;
    z-index: 1;
`

export const HomeBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #000;
`

export const HomeTitle = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, .95);
    border-radius: 94% 6% 98% 2% / 5% 94% 6% 95%;
    
    h1{
        color: #000;
        font-size: 48px;
        text-align: center;
        font-family: 'Tomorrow', sans-serif;

        @media screen and (max-width: 768px) {
        font-size:40px;
        }
        @media screen and (max-width: 480px) {
            font-size: 32px;
        }
    }
    p{
        margin-top: 24px;
        color: #000;
        font-size: 24px;
        text-align: center;
        max-width: 600px;

        @media screen and (max-width: 768px) {
        font-size:24px;
        }
        @media screen and (max-width: 480px) {
            font-size: 18px;
        }
    }

    
`