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
import CookieConsent from "../../components/CookieConsent/index.js";
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
                <Footer/>
                <CookieConsent/>
            </Wrapper>
        );
    }
}
