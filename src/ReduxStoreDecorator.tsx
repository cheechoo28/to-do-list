import {Provider} from "react-redux";
import {RootStateType} from "./store";
import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./reducers/taskss-reducer";
import {toDoListsReducer} from "./reducers/todolists-reducer";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses} from "./api/tasksAPI";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    toDoLists: toDoListsReducer
})

const initialGlobalState = {
    toDoLists: [
        {id: "todolistId1", title: "What to learn", filter: "all", addedDate: '', order: 0},
        {id: "todolistId2", title: "What to buy", filter: "all" , addedDate: '', order: 0}
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
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as RootStateType);

export const ReduxStoreDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}> {storyFn()}</Provider>
}