import styled from "styled-components";

const StyledContainerWrapper = styled.div`
    width: 65%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const StyledContainer = styled.div`
    width: 22%;
    margin: auto;
    padding-top: 50px;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const StyledSquare = styled.div`
    width: 255px;
    height: 216px;
    border-top: 5px solid ${props => props.color};
    border-radius: 15px;
    background-color: ${props => props.darkmode ? '#F7F9FF' : '#252B42'};
    transition: 0.4s all ease;
`;

const StyledRectangle = styled.div`
    width: 255px;
    height: 125px;
    border-radius: 15px;
    background-color: ${props => props.darkmode ? '#F7F9FF' : '#252B42'};
    transition: 0.4s all ease;
`;

const StyledSocial = styled.div`
    margin: auto;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 15px;
`;

const StyledStats = styled.div`
    margin: auto;
    padding: 10px;
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 25px;
`;

const StyledImg = styled.img`
    width: auto;
`;

const StyledImg2 = styled.img`
    width: auto;
    position: relative;
    right: -20px;
`;

const StyledAt = styled.h3`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    color: ${props => props.darkmode ? '#63687D' : '#8C98C6'};
    transition: 0.4s all ease;
`;

const StyledTitle = styled.h3`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
    margin: 0;
    color: ${props => props.darkmode ? '#63687D' : '#8C98C6'};
    transition: 0.4s all ease;
`;

const StyledFollowers = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 62px;
    text-align: center;
    margin: 0;
    margin-top: 10px;
    color: ${props => props.darkmode ? '#1D1F29' : '#FFFFFF'};
    transition: 0.4s all ease;
`;

const StyledNumberStat = styled.h1`
    width: 50%;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    margin: 0;
    color: ${props => props.darkmode ? '#1D1F29' : '#FFFFFF'};
    transition: 0.4s all ease;
`;

const StyledText = styled.h2`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    letter-spacing: 4px;
    margin: 0;
    margin-top: 10px;
    color: ${props => props.darkmode ? '#63687D' : '#8C98C6'};
    transition: 0.4s all ease;
`;

const StyledChange = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const StyledChangeStat = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    position: relative;
`;

const StyledChangeText = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 12px;
    text-align: right;
    color: ${props => props.colorSymbol};
`;

const StyledChangeUp = styled.img`
    width: auto;
`;


export {StyledContainerWrapper, StyledSquare, StyledRectangle, StyledContainer, StyledSocial, StyledStats, StyledFollowers, StyledNumberStat, StyledAt, StyledTitle, StyledImg, StyledImg2, StyledText, StyledChange, StyledChangeStat, StyledChangeText, StyledChangeUp};