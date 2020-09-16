import styled from "styled-components";
import {
  DEFAULT_BORDER,
  DEFAULT_BORDER_RADIUS,
  MAIN_COLOR_MEDIUM,
  WHITE,
} from "../../constants/defaultStyleProps";

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  align-items: center;
`;

export const FirstArticle = styled.article`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 80vh;
  align-items: center;
  background-color: ${MAIN_COLOR_MEDIUM};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 80vh;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${WHITE};
  height: 33%;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    position: relative;
    height: 100%;
    width: 25%;
  }
`;

export const SidebarContent = styled.div`
  width: 90%;
  height: 90%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TaskListDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    border: ${DEFAULT_BORDER};
    border-radius: ${DEFAULT_BORDER_RADIUS};
  }
`;

export const TaskListMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: ${DEFAULT_BORDER};
  border-radius: ${DEFAULT_BORDER_RADIUS};

  @media (min-width: 769px) {
    display: none;
    border: none;
  }
`;

export const List = styled.ul`
  display: flex;
  padding-inline-start: 0;
  flex-direction: column;
  padding: 5%;
`;

export const ListItem = styled.li`
  list-style-type: none;
  border: solid 2px #fff;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4px;
  margin: 2% 0;
`;

