export const SAVE_TASK = "tasks/SAVE_TASK"
export const DELETE_TASK = "tasks/DELETE_TASK"
export const GET_TASK_LIST = "tasks/GET_TASK_LIST"
export const DISPLAY_TASK_LIST_SUCCESS = "tasks/DISPLAY_TASK_LIST_SUCCESS"
const TESTE = "tasks/TESTE"

export const saveTask = (data) => {
    console.log("saveTask", data)
    return {
        description: data.description,
        time:data.time,
        type: SAVE_TASK,
        registerDate:new Date()
    }
}

export const deleteTask = (task) =>{
    console.log("delete task",task)
    return {
        name:task.name,
        type:DELETE_TASK
    }
}

export const getTaskList = ()=>{
    return {  type:GET_TASK_LIST }
}

export const displayTaskListSuccess = (tasks)=>{
    console.log("displayTaskListSuccess", tasks)
    return {
        type:DISPLAY_TASK_LIST_SUCCESS,
        taskList:tasks
    }
}


/*export const changeHolder = (idSelectedHolder) => {
    return {
        currentHolderId: idSelectedHolder,
        type: CHANGE_HOLDER
    }
}*/


/***REDUCER */
const initialState = {
    taskList: [],
}

export default function (state = initialState, action) {

    console.log("on reducer", action)
    switch (action.type) {
        case DISPLAY_TASK_LIST_SUCCESS:
            return {
                taskList:action.taskList
            }

        default:
            return state;
    }
}