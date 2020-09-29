import React, { Component } from "react";
import {
    Wrapper,
    FirstArticle,
    Sidebar,
    SidebarContent,
    List,
    ListItem,
    TaskListDesktop,
    TaskListMobile,
} from "./style.js";
import StopWatchApp from "../../components/StopWatchApp/index.js";
import TaskList from "../../components/TaskList/index.js";
import InfoSection from "../../components/sections/content/InfoSection/index.js";
import Footer from "../../components/sections/footer/index.js";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { BLACK, WHITE, MAIN_COLOR_MEDIUM } from "../../constants/defaultStyleProps.js";
import NotificationsComponent from "../../components/NotificationsComponent/index.js";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Wrapper>
                <FirstArticle className="FirstArticle">
                    <Sidebar>
                        <SidebarContent>
                            <TaskListDesktop>
                                <TaskList></TaskList>
                            </TaskListDesktop>
                        </SidebarContent>
                    </Sidebar>
                    <StopWatchApp></StopWatchApp>
                    <Sidebar>
                        <SidebarContent>
                            <TaskListMobile>
                                <TaskList></TaskList>
                            </TaskListMobile>
                        </SidebarContent>
                    </Sidebar>
                </FirstArticle>
                <InfoSection />
                <Footer />
                <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: BLACK }}
                    buttonStyle={{ color: WHITE, fontSize: "13px", background: MAIN_COLOR_MEDIUM }}
                    expires={150}
                >
                    This website uses cookies, which are necessary for its
                    functioning and required to achieve the purposes of it. You
                    accept the use of cookies or other identifiers by closing or
                    dismissing this notice , by clicking on "Accept" or by
                    continuing to browse otherwise.{" "}

                </CookieConsent>
            </Wrapper>
        );
    }
}
