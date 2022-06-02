import React, {useState, useEffect} from 'react';
import { Heading, InfoMain, Paragraph, InfoWrapper } from '../Information/Information.styled';
import { CodeOutput, CodeInput, Btn } from './Trial.styled';

const Trial = ({blueBg, id}) =>{

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const onChangeHandler = (e) =>{
        setInput(e.target.value);
        console.log("changing input")
    }

    const toQuack = (e) =>{
        e.preventDefault();
        console.log("entering function")
        setOutput("Quack");
        var quack = " quack"
        var lengthInput = input.length;
        for(var i = 0; i<lengthInput; i++){
            console.log("entering for loop "+i)
            if(input[i] === ' '){
                console.log("if statement")
                quack = quack + quack
                setOutput(output+quack);
            }
        }
    }

    return(
        <>
            <InfoMain blueBg={blueBg} id={id}>
                <InfoWrapper>
                    <Heading>Try It!</Heading>
                    <Paragraph>Input in human language</Paragraph>
                    <CodeInput onChange={onChangeHandler}></CodeInput>
                    <Btn onClick={toQuack}>Translate</Btn>
                    <Paragraph>Quackput quack quack quaaaack:</Paragraph>
                    <CodeOutput value={output} readOnly={true}></CodeOutput>
                </InfoWrapper>
            </InfoMain>
        </>
    )
}

export default Trial