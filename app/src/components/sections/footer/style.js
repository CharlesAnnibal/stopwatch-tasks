import styled from 'styled-components';
import {BLACK, WHITE} from '../../../constants/defaultStyleProps';

export const FooterWrapper = styled.div`
      display:flex;
      width:100%; 
      justify-content:flex-end;
      background-color:${BLACK};
      color:${WHITE};
`
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

export const Paragraph = styled.p`
    font-size:5vw;
    color:${WHITE};

    @media(min-width:769px){
        font-size:1vw;
    }
`