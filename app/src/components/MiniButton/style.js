import styled from "styled-components";
import {
    MAIN_COLOR_LIGHT,
    DEFAULT_FONT_FAMILY,
    MAIN_COLOR_DARK,
    ORANGE,
    WHITE,
} from "../../constants/defaultStyleProps";

const css = ({ bgcolor, borderColor, textcolor, transparent, width }) => {
    return `background-color:${bgcolor || "transparent"};
    border-radius: 4px;
    color:${textcolor || WHITE};
    font-family: ${DEFAULT_FONT_FAMILY};
    font-style: normal;
    opacity:0.5;
    opacity:${transparent ? 0.4 : 1};
    font-size: 12px;
    font-weight: 500;
    text-align:center;
    padding: 2%;
    border:solid 2px;
    border-color:${borderColor || MAIN_COLOR_LIGHT};
    width:${width || "auto"};
    box-shadow: 0px 5px 15px rgba(34, 34, 34, 0.11);

    @media(min-width:768px){
        max-width:300px;
    }   
`;
};

export const LinkButton = (Link) => {
    return styled(Link)`
        ${css}
    `;
};

export const Button = styled.button`
    ${css}
`;
