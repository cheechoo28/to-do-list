import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {toDoListsReducer} from "./todolists-reducer";
import thunk from 'redux-thunk'
import {appReducer} from "./app-reducer";

const rootReducers = combineReducers({
    tasks: tasksReducer,
    toDoLists: toDoListsReducer,
    app: appReducer
})


export const store = createStore(rootReducers, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store