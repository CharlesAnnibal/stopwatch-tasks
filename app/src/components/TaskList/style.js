import styled from "styled-components";
import {
    MAIN_COLOR_DARK,
    RED,
    BLACK,
    WHITE,
} from "../../constants/defaultStyleProps";

export const List = styled.ul`
    display: flex;
    padding-inline-start: 0;
    flex-direction: column;
    padding: 5%;
    overflow-y: scroll;
    height: 100%;

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #6361d6;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const ListItem = styled.li`
    position: relative;
    color: ${BLACK};
    list-style-type: none;
    font-weight: 400;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255);
    padding: 7%;
    margin: 2% 0;
    box-shadow: 1px 1px white;
`;

export const CloseItem = styled.span`
    position: absolute;
    background-color: ${RED};
    width: 30px;
    height: 30px;
    color: ${WHITE};
    display:flex;
    justify-content:center;
    top: 0;
    border-radius: 0 5px 0 90%;
    right: -1.5px;
`;

export const Titles = styled.h2`
    color: ${WHITE};
    font-size: 6vw;
    text-align: center;

    @media (min-width: 769px) {
        font-size: 1.8vw;
    }
`;
