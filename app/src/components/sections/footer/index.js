import React from "react";
import { FooterWrapper, Container, Paragraph } from "./style.js";

const Footer = () => {
    return (
        <FooterWrapper className="test">
            <Container>
               <Paragraph>Developed by Charles Santos</Paragraph>
               <Paragraph>https://www.linkedin.com/in/charles-annibal/</Paragraph>
               <Paragraph>https://github.com/CharlesAnnibal</Paragraph>
            </Container>
        </FooterWrapper>
    );
};
export default Footer;
