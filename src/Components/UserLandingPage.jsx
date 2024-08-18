import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header2 from './Header2';
import Recommendations from './Recommendations';
import styled from 'styled-components';

const StyledUserLandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const StyledUserLandingCard = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #7B92DC, #72C7E7, #78E0D1); /* Brighter background gradient */
`;

const StyledCard = styled.div`
    width: 50%; /* Adjusted size for a more compact look */
    margin: auto;
    padding: 40px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15); /* More prominent shadow */
    border-radius: 12px; /* Increased border-radius for a smoother look */
    border: 3px solid #97DBE8; /* Added a subtle border to make the card pop */
`;

const StyledSection = styled.section`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
`;

const StyledWelcomeSection = styled(StyledSection)`
    text-align: center;
    background-color: #E0F7FA; /* Light cyan background for welcome section */
`;

const StyledQuickNavSection = styled(StyledSection)`
    display: flex;
    justify-content: center;
`;

const StyledNavItem = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    width: 60%;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    margin: 0 10px; /* Spacing between navigation items */
`;

const StyledRecommendationItem = styled.div`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 12px;
    background-color: #f0f8ff; /* Light blue background for recommendations */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DefaultLanding = () => (
    <div>
        {/* Welcome Section */}
        <StyledWelcomeSection>
            <h2 style={{ marginBottom: '10px' }}>Welcome back, [User Name]!</h2>
            <div style={{ marginTop: '10px', fontSize: '1em', color: '#333' }}>
                <p>Ready to make informed investment decisions today?</p>
                <a href="/profile">View/Edit Profile</a>
            </div>
        </StyledWelcomeSection>

        {/* Quick Navigation Links */}
        <StyledQuickNavSection>
            <StyledNavItem>
                <h3 style={{ marginBottom: '15px', color: '#3B82F6' }}>Dashboard</h3>
                <a href="/dashboard" style={{ color: '#007BFF' }}>Go to Dashboard</a>
            </StyledNavItem>
        </StyledQuickNavSection>

        {/* Recommendations Section */}
        <StyledSection>
            <h3 style={{ marginBottom: '15px', color: '#FF5722' }}>Today's Recommendations</h3>
            <StyledRecommendationItem>
                <p>Recommendation 1: <strong>Buy ABC Stock</strong></p>
                <button style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Subscribe to Unlock</button>
            </StyledRecommendationItem>
            <StyledRecommendationItem>
                <p>Recommendation 2: <strong>Hold XYZ Stock</strong></p>
                <button style={{ backgroundColor: '#FF9800', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Subscribe to Unlock</button>
            </StyledRecommendationItem>
        </StyledSection>
    </div>
);

const UserLandingPage = () => {
    return (
        <StyledUserLandingContainer>
            <Header2 />
            <StyledUserLandingCard>
                <StyledCard>
                    <Routes>
                        <Route path="/recommendations" element={<Recommendations />} />
                        <Route path="/" element={<DefaultLanding />} />
                    </Routes>
                </StyledCard>
            </StyledUserLandingCard>
        </StyledUserLandingContainer>
    );
};

export default UserLandingPage;
