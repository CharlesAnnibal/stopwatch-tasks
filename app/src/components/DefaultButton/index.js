import React from 'react';
import { Button, LinkButton } from './style.js';
import { Link } from 'react-router-dom';

const DefaultButton = (props) => {

  const StyledButton = (props.href ? LinkButton(Link) : Button)
  return (
    <StyledButton
      to={props.href}
      onClick={props.onClick}
      className=""
      transparent={props.transparent}
      textcolor={props.textcolor}
      bgcolor={props.bgcolor} 
      borderColor={props.borderColor}
      width={props.width}>

      {props.children}
    </StyledButton>
  );
};
export default DefaultButton;
