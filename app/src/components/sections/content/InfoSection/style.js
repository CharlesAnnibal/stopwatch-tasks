import styled from "styled-components";
import {MAIN_COLOR_MEDIUM, WHITE, BLACK} from '../../../../constants/defaultStyleProps'

export const InfoSectionWrapper = styled.article`
    display: flex;
    width: 100%;
    height: auto;
    min-height: 50vh;
    align-items: center;
    background-color: ${WHITE};
    flex-direction: column;
    padding:5% 0;
`;

export const Container = styled.div`
    display: flex;
    width:90%;
    flex-direction: column;
    margin:0 5%;

    @media(min-width:769px){
        width:70%;
        margin:0 15%;
    }
`

export const Titles = styled.h2`
    color:${MAIN_COLOR_MEDIUM};
    font-size:6vw;
    text-align:center;

    @media(min-width:769px){
        font-size:1.8vw;
    }
`

export const Paragraph = styled.p`
    font-size:5vw;
    color:${BLACK};

    @media(min-width:769px){
        font-size:1.5vw;
    }
`

export const TitleH3 = styled.h3`
    font-size:5.6vw;
    color:${BLACK};
    text-align:left;

    @media(min-width:769px){
        font-size:1.6vw;
    }
`