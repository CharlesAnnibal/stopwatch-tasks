import { connect } from "react-redux";
import { saveTask } from "../../ducks/tasks";
import StopWatchApp from "./StopWatchApp";
//import {hideMenu} from  "../../redux/ducks/contextMenu";


const mapStateToProps = state => {
    const tasks = state.tasks 
    console.log("mapStateToProps",state)
    return { tasks }
}

const mapDispatchToProps = { saveTask };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StopWatchApp);