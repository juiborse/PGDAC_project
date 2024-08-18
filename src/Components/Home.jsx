import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <StyledContainer>
            <StyledContent>
                <Title>StockSage</Title>
                <Subtitle>Personalized stock recommendations</Subtitle>
                <Description>
                    We tell you when to <GreenText>buy</GreenText> and when to <RedText>sell</RedText>.
                </Description>
            </StyledContent>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 150px); /* Adjust for header and footer height */
    background: linear-gradient(to right, #f0f7ff, #c9d1eb, #a0c4ff);
`;

const StyledContent = styled.div`
    background-color: #ffffff; /* White background for content */
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    padding: 30px;
    max-width: 600px;
    width: 100%; /* Adjust width to be responsive */
    text-align: center; /* Center align content */
    border: 2px solid #97dbe8; /* Border to make the box stand out */
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #5a67d8;
    margin-bottom: 10px;
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: #7f9cf5;
    margin-bottom: 20px;
    border-bottom: 2px solid #7f9cf5;
    padding-bottom: 10px;
`;

const Description = styled.p`
    font-size: 1.5rem;
    color: #4a5568;
`;

const GreenText = styled.span`
    color: #38a169;
`;

const RedText = styled.span`
    color: #e53e3e;
`;

export default Home;
