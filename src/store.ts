import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./reducers/taskss-reducer";
import {toDoListsReducer} from "./reducers/todolists-reducer";

const rootReducers = combineReducers({
    tasks: tasksReducer,
    toDoLists: toDoListsReducer
})


export const store = createStore(rootReducers)

export type RootStateType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store