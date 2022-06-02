import React from 'react';
import Video from './video.mp4'
import { HomeContainer, HomeBG, VideoBG, HomeTitle } from './Home.styled';

const Home = ({id}) => {
    return (
        <HomeContainer id={id}>
            <HomeBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
            </HomeBG>
            <HomeTitle>
                <h1>Holy Quack!</h1>
                <p>We've been turned into ducks and QUACK can't QUACK understand programming languages anymore! Fortunately, QUACK we've developed a way to do so.</p>
            </HomeTitle>
        </HomeContainer>
    )
}

export default Home