import styled from 'styled-components';
import { MAIN_COLOR_DARK, WHITE, DEFAULT_BORDER, DEFAULT_BORDER_RADIUS } from '../../constants/defaultStyleProps'

export const StopWatchAppWrapper = styled.section`
    display:flex;
    justify-content:center;
    flex-direction:column;
    color:${WHITE};
    height:33%;  
    width:100%;
    position:relative;

    @media(min-width:768px){
        position:relative;
        height:100%;
        width:50%;
    }   
`

export const StopWatchContainer = styled.div`
    width:90%;
    height:90%;
    margin:5%;
    padding:5%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    border:${DEFAULT_BORDER};
    border-radius:${DEFAULT_BORDER_RADIUS};
`

export const H1Title = styled.h1`
    font-size:2rem;
    text-align:center;
    margin:0;

    @media(min-width:768px){
        font-size:2.5rem;
    }  
`

export const Time = styled.p`
    font-size: 3rem;
    text-align:center;
    margin:0;

    @media(min-width:768px){
        font-size:3.8rem;
    } 
`

export const CommandsContainer = styled.div`
    display:grid;
    grid-template-columns: 30% 30% 30%;
    grid-column-gap:3% 3%;
    justify-content:space-between;
    grid-template-rows: 100%;

`