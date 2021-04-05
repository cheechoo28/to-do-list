import {Provider} from "react-redux";
import {RootStateType} from "./store";
import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./reducers/taskss-reducer";
import {toDoListsReducer} from "./reducers/todolists-reducer";
import {v1} from "uuid";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    toDoLists: toDoListsReducer
})

const initialGlobalState = {
    toDoLists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as RootStateType);

export const ReduxStoreDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}> {storyFn()}</Provider>
}