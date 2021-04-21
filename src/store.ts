import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./reducers/tasks-reducer";
import {toDoListsReducer} from "./reducers/todolists-reducer";
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    tasks: tasksReducer,
    toDoLists: toDoListsReducer
})


export const store = createStore(rootReducers, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store