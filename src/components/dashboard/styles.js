import styled from "styled-components";

const StyledContainer = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    justify-content: space-between;
    align-items: flex-start;
    transition: 0.4s all ease;
`;

const StyledDashboard = styled.div`
    
`;

const StyledH1 = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    color: ${props => props.color ? '#1D1F29' : '#FFFFFF'};
    margin: 0;
    transition: 0.4s all ease;
    @media (max-width: 800px) {
        font-size: 20px;
    }
`;

const StyledH2 = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.color ? '#63687D' : '#8C98C6'};
    margin: 5px 0;
    transition: 0.4s all ease;

    @media (max-width: 800px) {
        font-size: 14px;
    }
`;

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const StyledText = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.color ? '#63687D' : '#FFFFFF'};
    transition: 0.4s ease;
`;

const StyledClick = styled.div`
    width: 45px;
    height: 20px;
    background: ${props => props.backgroundColor ? 'gray' : 'linear-gradient(rgb(64, 219, 130), rgb(56, 143, 231))'};
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s ease;
`;

const StyledCircle = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: ${props => props.color ? '#FFFFFF' : '#20222F'};
    position: relative;
    top: 2px;
    left: ${props => props.left ? '4px' : '25px'};
    transition: 0.4s ease;
`;


export {StyledContainer, StyledDashboard, StyledH1, StyledH2, StyledButton, StyledText, StyledClick, StyledCircle};