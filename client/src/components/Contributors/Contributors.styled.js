import styled from "styled-components";

export const ContribWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 0 24px;
    margin-top: 0;
`

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

export const Contributor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: #fff;
    border-radius: 93% 7% 81% 19% / 8% 81% 19% 92%;
    color: #000;
`

export const ContributorIMG = styled.img`
    border-radius: 50%;
    width: 14em;
    height: 14em;
`

export const ContributorInfo = styled.p`
    width: 80%;
    text-align: center;
    font-size: 18px;
`

export const ContributorName = styled.h1`
    font-family: 'Tomorrow', sans-serif;
`

