import { createStore, combineReducers, applyMiddleware } from 'redux'
import tasks from '../ducks/tasks'
import createSagaMiddleware from 'redux-saga'
import {saveTaskInService, getTaskListFromService, deleteTaskInService} from '../sagas/tasks'

const rootReducer = combineReducers({ tasks });

const sagaMiddleware = createSagaMiddleware()

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState, applyMiddleware(sagaMiddleware))

const sagas = [
    saveTaskInService,
    getTaskListFromService,
    deleteTaskInService
]

sagas.forEach((saga) => {
    console.log("run saga")
    sagaMiddleware.run(saga)
})

// Tell react-snap how to save Redux state
window.snapSaveState = () => ({
    __PRELOADED_STATE__: store.getState()
});

export default store;