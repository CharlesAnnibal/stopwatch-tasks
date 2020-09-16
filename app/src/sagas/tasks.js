import "regenerator-runtime/runtime";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
    SAVE_TASK,
    GET_TASK_LIST,
    getTaskList,
    displayTaskListSuccess,
    DELETE_TASK,
} from "../ducks/tasks";
import {
    createCookie,
    getAllTasksFromCookie,
    deleteCookieByName,
} from "../services/cookies/cookieManager";

export function* saveTaskInService() {
    yield takeEvery(SAVE_TASK, saveTaskCookie);
}

export function* deleteTaskInService(){
    yield takeEvery(DELETE_TASK, deleteTaskCookie)
}

function* deleteTaskCookie(action){
    try{
        console.log("delete task-- ", action.name)
        yield call(deleteCookieByName, action.name)
        yield put(getTaskList());
    }catch(e){
        console.log("erro" + e.message);
    }
}

function* saveTaskCookie(action) {
    try {
        const cookieName = `task-${action.registerDate.toString()}`;
        const newTaskObject = {
            name: cookieName,
            description: action.description,
            time: action.time,
            registerDate: action.registerDate,
        };
        yield call(createCookie, cookieName, JSON.stringify(newTaskObject));
        yield put(getTaskList());
    } catch (e) {
        console.log("erro" + e.message);
    }
}

export function* getTaskListFromService() {
    yield takeEvery(GET_TASK_LIST, getTaskListFromCookie);
}

function* getTaskListFromCookie() {
    try {
        let tasks = yield call(getAllTasksFromCookie);
        console.log("lista de tasks:", tasks);
        tasks.sort((a, b) => {
            return a.registerDate < b.registerDate ? 1 : -1;
        });
        console.log("lista de tasks depois do sort:", tasks);
        yield put(displayTaskListSuccess(tasks));
    } catch (e) {
        console.log(e, "Erro ao tentar buscar cookies");
    }
}
