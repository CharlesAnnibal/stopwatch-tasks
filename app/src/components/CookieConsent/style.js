import styled from "styled-components";
export const CookieConsentWrapper = styled.div`
    display: ${props => props.shouldShowPopup ? 'flex' : 'none'};
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #333;
    padding:5%;

    @media (min-width: 768px) {
        flex-direction: row;
        padding:1%;
    }
`;


export const Text = styled.p`
    color:white;
    width:100%;

    @media (min-width: 768px) {
        width:80%;
    }
`
export const BtnAcceptArea = styled.div`
    width:100%;
    height:60%;
    display:flex;
    justify-content:center;
    margin:auto;

    @media (min-width: 768px) {
        
        width:20%;
    }
`
