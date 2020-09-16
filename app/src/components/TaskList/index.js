import { connect } from "react-redux";
import { saveTask, getTaskList, deleteTask } from "../../ducks/tasks";
import TaskList from "./TaskList";
//import {hideMenu} from  "../../redux/ducks/contextMenu";


const mapStateToProps = state => {
    const tasks = state.tasks 
    console.log("mapStateToProps",state)
    return { tasks }
}

const mapDispatchToProps = { saveTask, getTaskList, deleteTask };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);