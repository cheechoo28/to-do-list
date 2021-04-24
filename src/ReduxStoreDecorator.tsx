import {Provider} from "react-redux";
import {RootStateType} from "./redux/store";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./redux/tasks-reducer";
import {toDoListsReducer} from "./redux/todolists-reducer";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses} from "./api/tasksAPI";
import {appReducer} from "./redux/app-reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    toDoLists: toDoListsReducer,
    app: appReducer
})

const initialGlobalState: RootStateType = {
    toDoLists: [
        {id: "todolistId1", title: "What to learn", filter: "all", addedDate: '', order: 0, entityStatus: 'idle'},
        {id: "todolistId2", title: "What to buy", filter: "all" , addedDate: '', order: 0, entityStatus: 'loading'}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", todoListId: "todolistId1", status: TaskStatuses.New, addedDate: '', deadline: '', description: '', order: 0, priority: TaskPriorities.Low, startDate: ''},
            {id: v1(), title: "JS", todoListId: "todolistId1", status: TaskStatuses.New, addedDate: '', deadline: '', description: '', order: 0, priority: TaskPriorities.Low, startDate: ''}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", todoListId: "todolistId2", status: TaskStatuses.New, addedDate: '', deadline: '', description: '', order: 0, priority: TaskPriorities.Low, startDate: ''},
            {id: v1(), title: "React Book", todoListId: "todolistId2", status: TaskStatuses.New, addedDate: '', deadline: '', description: '', order: 0, priority: TaskPriorities.Low, startDate: ''}
        ]
    },
    app: {
        status: 'idle',
        error: null
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as RootStateType, applyMiddleware(thunk));

export const ReduxStoreDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}> {storyFn()}</Provider>
}