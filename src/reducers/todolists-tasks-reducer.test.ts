import {TasksObjType, ToDoListsType} from "../App";
import {addToDoListAC, toDoListsReducer} from "./todolists-reducer";
import {tasksReducer} from "./taskss-reducer";


test('ids should be equals', () => {
    const startTasksState: TasksObjType = {};
    const startToDoListsState: Array<ToDoListsType> = [];

    const action = addToDoListAC("new todolist");

    const endTasksState = tasksReducer(startTasksState, action)
    const endToDoListsState = toDoListsReducer(startToDoListsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromToDoLists = endToDoListsState[0].id;

    expect(idFromTasks).toBe(action.toDoListId);
    expect(idFromToDoLists).toBe(action.toDoListId);
});

