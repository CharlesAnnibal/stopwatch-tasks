import React from "react";
import {
    InfoSectionWrapper,
    Titles,
    Paragraph,
    TitleH3,
    Container,
} from "./style.js";

const InfoSection = () => {
    return (
        <InfoSectionWrapper className="test">
            <Container>
                <Titles>Timing your tasks to improve productivity!</Titles>
                <Paragraph>
                    Use our tool to register the time spended on each task. It
                    can be very useful for you that make a lot of amazing things
                    but don´t know exactly how much time was spended.
                </Paragraph>
                <Titles>Useful for many roles</Titles>
                <Paragraph>
                    Our tool can be useful for several activities and roles.
                </Paragraph>
                <TitleH3>Programmers</TitleH3>
                <Paragraph>
                    Manage the time spended in each feature that you are
                    developing.
                </Paragraph>
                <TitleH3>Designers</TitleH3>
                <Paragraph>
                    Control your time and discover how much time you are
                    spendind with your creative jobs. If you are a freelancer it
                    could be very useful.
                </Paragraph>
                <TitleH3>Recruiters</TitleH3>
                <Paragraph>
                    Use our tool to mark the time of your interviews and
                    optimize them.
                </Paragraph>
                <TitleH3>Managers</TitleH3>
                <Paragraph>
                    Knows how many time you and your team is spending in
                    meetings.{" "}
                </Paragraph>
            </Container>
        </InfoSectionWrapper>
    );
};
export default InfoSection;
