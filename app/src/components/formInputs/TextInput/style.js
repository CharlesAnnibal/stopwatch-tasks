import styled from 'styled-components'

import { MAIN_COLOR_LIGHT, DEFAULT_BOX_SHADOW, WHITE, ORANGE, BLACK, GRAY } from '../../../constants/defaultStyleProps'

export const Wrapper = styled.div`
    width:100%;
    position:relative;
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:5% 0;
`;

export const Input = styled.input`
  font-size: 14px;
  background-color:${WHITE};
  border-radius: 5px;
  color: ${BLACK};
  border: none;
  width: ${props => {
    let customWidth = props.width ? `${props.width}%` : 'auto'
    return props.hasSelect ? customWidth : '100%';
  }};
  padding: 20px 10px 20px 10px;
  &:focus {
      outline: none;
  }
  
`;

export const Label = styled.label`
  min-width:50%;
  color: ${WHITE};
  pointer-events: none;
  transition: 0.2s ease all;
`;

export const ValidCheck = styled.img`
  display: ${props => props.show ? 'block' : 'none'};
  margin:5px;
`

export const RequiredPen = styled.img`
  display: ${props => props.show ? 'block' : 'none'};
  margin: 5px 5px 5px 15px;
`