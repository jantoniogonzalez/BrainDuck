import React from "react";
import { Heading, InfoMain } from "../Information/Information.styled";
import { Contributor, ContribWrapper, ContributorIMG, ContributorInfo, ContributorName, TextWrapper } from "./Contributors.styled";
import smitDuck from './smit-duck.png'
import samDuck from './sam-duck.jpg'
import juanDuck from './juan-duck.jpg'
import akDuck from './ak-duck.jpg'

const Contributors = ({blueBg, id}) =>{
    return(
        <>
            <InfoMain blueBg={blueBg} id={id}>
                <TextWrapper>
                    <Heading>Contributors</Heading>
                    <ContribWrapper>
                        <Contributor>
                            <ContributorIMG src={akDuck}></ContributorIMG>
                            <ContributorName>Akki</ContributorName>
                            <ContributorInfo>Mastermind of the parser</ContributorInfo>
                        </Contributor>
                        <Contributor>
                            <ContributorIMG src={juanDuck}></ContributorIMG>
                            <ContributorName>Juan</ContributorName>
                            <ContributorInfo>Front-end of the website</ContributorInfo>
                        </Contributor>
                        <Contributor>
                            <ContributorIMG src={samDuck}></ContributorIMG>
                            <ContributorName>Samriddhi</ContributorName>
                            <ContributorInfo>Artist in the input file and presentation slides</ContributorInfo>
                        </Contributor>
                        <Contributor>
                            <ContributorIMG src={smitDuck}></ContributorIMG>
                            <ContributorName>Smit</ContributorName>
                            <ContributorInfo>Master of all domains</ContributorInfo>
                        </Contributor>
                    </ContribWrapper>
                </TextWrapper>
            </InfoMain>
        </>
    )
}

export default Contributors