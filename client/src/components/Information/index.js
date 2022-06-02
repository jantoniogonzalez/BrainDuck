import React from 'react';
import { InfoMain, InfoRow, InfoWrapper, TextWrapper, Heading, Paragraph } from './Information.styled';

const Information = ({head, body, blueBg, id}) => {


    return(
        <>
            <InfoMain blueBg={blueBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <Heading>{head}</Heading>
                            <Paragraph>{body}</Paragraph>
                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoMain>
        </>
    )
}

export default Information