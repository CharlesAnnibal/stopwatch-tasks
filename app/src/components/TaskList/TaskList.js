import React, { Component } from "react";
import { List, ListItem , Titles, CloseItem} from "./style.js";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  componentDidMount(){
      console.log("props tasklist", this.props)
      this.props.getTaskList()
  }

  closeTask(task){
    this.props.deleteTask(task)
  }

  render() {
    let list =
      this.props.tasks.taskList.length > 0
        ? this.props.tasks.taskList.map((task, index) => {
            return (
              <ListItem>
                <CloseItem onClick={()=>{this.closeTask(task)}}>x</CloseItem>
                {task.description}
                <br /> {task.time}
              </ListItem>
            );
          })
        : "";

    return (
      <>
        <Titles>Task list</Titles>
        <List  className="list">{list}</List>
      </>
    );
  }
}
